const Constant = Object.freeze({
  applicationContent: {
    profilePicHolder:
      "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png",
    apiSuccessResponse: {
      successResponse: {
        signupSuccess:"User Signup Successfully",
        logoutSuccess:"User Logout Successfully",
        loginSuccess:"User Login Successfully"
      },
      errorResponse: {
        signupError:"Error While Signup User",
        loginError:"Error Invalid Credentials",
        logoutError:"Error While Logout User"
      }
    }
  },
  envVariables: {
    backendURl:
      import.meta.env.VITE_APPLICATION_MODE === "development"
        ? import.meta.env.VITE_BACKEND_BASE_URL
        : "/vibechat/api/v1",
  },
  apiRoutes: {
    authRoutes: {
      SIGNUP:`/auth/signup`,
      LOGIN:`/auth/login`,
      LOGOUT:`/auth/logout`
    }
  },
});

export default Constant;
