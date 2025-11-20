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
  signupFieldsValidation,
   loginFieldsValidation
} = validationCheckers;
const { apisRoutes } = Constant;
const { avatarApis } = apisRoutes;
const { maleUserAvatar, femaleUserAvatar } = avatarApis;

const authControllers = {
  signup: async (request, response) => {
    // destructuring input fields from request.body
    const { fullName, username, password, confirmPassword, gender } =
      request.body;

    // Checking input-field validation
    signupFieldsValidation(
      { fullName, username, password, confirmPassword, gender },
      response
    );
    // Checking the password length here
    passwordLengthValidation(password, response);
    // Checking the confirmPassword validation here
    confirmPasswordValidation(password, confirmPassword, response);
    try {
      // Checking if user was exist or not
      const user = await User.findOne({ username });
      // If user was already exist than return this response
      if (user) {
        return response
          .status(409)
          .json({ success: false, message: "User already Exist" });
      }
      // Generate salt
      const salt = await bcrypt.genSalt(10);
      // Hashed Password for our hashed password
      const hashedPassword = await bcrypt.hash(password, salt);

      // Profile Picture
      const boyProfilePic = maleUserAvatar(username);
      const girlProfilePic = femaleUserAvatar(username);
      // Create newUser instance in User to save in database
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
      // If newUser was present than create JWT Token and saved new user in database
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
        // else return the Invalid User Data
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
  login: async (request, response) => {
    // Destructuring the username and password from request.body
    const { username, password } = request.body;
    // Checking the input-field validation
    loginFieldsValidation({ username, password }, response);

    try {
      // Checking the user in database with username
      const user = await User.findOne({ username });
      // compare password with saving in database and password field with the help of bcrypt library
      const isPasswordCorrect = await bcrypt.compare(
        password,
        user?.password || ""
      ); // It give value in boolean 
      if (!user || !isPasswordCorrect) {
        return response.status(400).json("Invalid Username or Password");
      }
      // Generate Token
      generateToken(user._id, response);
      // Sending Response 
      response.status(200).json({
        success: true,
        message: "User login successfully",
        loginUser: {
          _id: user._id,
          fullName: user.fullName,
          username: user.username,
          profilePic: user.profilePic,
        },
      });
    } catch (error) {
      console.error(`Error While Login User: ${error?.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
  logout: (_, response) => {
    try {
      response.cookie("jwtToken", "", {maxAge:0});
      response.status(200).json({success:true, message:"User Logout Successfully"});
    } catch (error) {
      console.error(`Error While Logout User: ${error?.message}`);
      response.status(500).json({success:false, message:"Internal Server Error"}); 
    }
  },
};

export default authControllers;
