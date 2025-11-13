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
 signupFieldsValidation: (inputFields, response) => {
      if (
        !inputFields?.fullName ||
        !inputFields?.username ||
        !inputFields?.password ||
        !inputFields?.confirmPassword ||
        !inputFields?.gender
      ) {
        return response.status(400).json({success:false, message:"All fields are required"});
      }
  },
  loginFieldsValidation:(inputFields, response) => { 
    if(!inputFields.username && !inputFields.password) {
      return response.status(400).json({success:false, message:"All fields are required"});
    } 

  }
};

export default validationCheckers;
