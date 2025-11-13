import { validationCheckers } from "../../helper/index.js";

const {
  passwordLengthValidation,
  confirmPasswordValidation,
  signupValidations,
} = validationCheckers;
const { signupFieldsValidation } = signupValidations;

const authControllers = {
  signup: (request, response) => {
    const { fullName, username, password, confirmPassword, gender } =
      request.body;

    signupFieldsValidation(
      { fullName, username, password, confirmPassword, gender },
      response
    );

    passwordLengthValidation(password, response);
    confirmPasswordValidation(password, response);
    try {
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
