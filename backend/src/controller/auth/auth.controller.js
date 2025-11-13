import {
  Constant,
  generateToken,
  validationCheckers,
} from "../../helper/index.js";
import { User } from "../../model/index.js";
import bcrypt from "bcryptjs";

const {
  passwordLengthValidation,
  confirmPasswordValidation,
  signupValidations,
} = validationCheckers;
const { signupFieldsValidation } = signupValidations;
const { apisRoutes } = Constant;
const { avatarApis } = apisRoutes;
const { maleUserAvatar, femaleUserAvatar } = avatarApis;

const authControllers = {
  signup: async (request, response) => {
    const { fullName, username, password, confirmPassword, gender } =
      request.body;

    signupFieldsValidation(
      { fullName, username, password, confirmPassword, gender },
      response
    );

    passwordLengthValidation(password, response);
    confirmPasswordValidation(password, confirmPassword, response);
    try {
      // Checking if user was exist or not
      const user = await User.findOne({ username });

      if (user) {
        return response
          .status(409)
          .json({ success: false, message: "User already Exist" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Profile Picture
      const boyProfilePic = maleUserAvatar(username);
      const girlProfilePic = femaleUserAvatar(username);

      const newUser = new User({
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilePic:
          gender === "male" || gender === "Male"
            ? boyProfilePic
            : girlProfilePic,
      });

      if (newUser) {
        generateToken(newUser._id, response);
        await newUser.save();

        response.status(201).json({
          success: true,
          message: "User signup successfully",
          signupUser: {
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            gender: newUser.gender,
            profilePic: newUser.profilePic,
          },
        });
      } else {
        response
          .status(400)
          .json({ success: true, message: "Invalid User Data" });
      }
    } catch (error) {
      console.error(`Error While Signup User: ${error?.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
  login: (request, response) => {},
  logout: (request, response) => {},
};

export default authControllers;
