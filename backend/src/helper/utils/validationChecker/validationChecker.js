const validationCheckers = {
  passwordLengthValidation: (password, response) => {
    if (password.length < 6) {
      return response
        .status(400)
        .json({
          success: false,
          message: "Password characters should be minimum 6",
        });
    }
  },
  confirmPasswordValidation: (password, confirmPassword, response) => {
    if(password !== confirmPassword) {
      return response.status(400).json({success:false, message:"Password don't match"})

    }
  },
  signupValidations: {
    signupFieldsValidation: (signupInfo, response) => {
      if (
        !signupInfo.fullName ||
        !signupInfo.username ||
        !signupInfo.password ||
        !signupInfo.confirmPassword ||
        !signupInfo.gender
      ) {
        return response.status(400).json({success:false, message:"All fields are required"});
      }
    },
  },
};

export default validationCheckers;
