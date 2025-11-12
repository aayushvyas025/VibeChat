const authControllers = {
  signup: (request, response) => {
    const { fullName, username, password, confirmPassword, gender, email } =
      request.body;
    
      if(!fullName || !username || !password || !confirmPassword || !gender || !email) {
        return response.status(400).json({success:false, message:"All fields are required"});
      }

    

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
