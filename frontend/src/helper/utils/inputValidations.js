import toast from "react-hot-toast";

const inputValidations = {
  handleSignupInputErrors: (signupInfo) => {
    if (
      !signupInfo.fullName.trim() ||
      !signupInfo.username.trim() ||
      !signupInfo.password.trim() ||
      !signupInfo.confirmPassword.trim() ||
      !signupInfo.gender.trim()
    ) {
      toast.error("Please fill all the fields");
      return false;
    };

    if (signupInfo.password !== signupInfo.confirmPassword) {
      toast.error("Password do not match");
      return false;
    };

    if (signupInfo.password.length < 6) {
      toast.error("Password should be 6 characters long");
      return false;
    };

    return true; 
  },
};

export default inputValidations;
