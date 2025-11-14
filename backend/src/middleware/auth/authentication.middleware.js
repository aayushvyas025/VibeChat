import { Constant } from "../../helper/index.js";
import { User } from "../../model/index.js";
import jwt from "jsonwebtoken";

const { envVariables } = Constant;
const { jwtSecret } = envVariables;

 const authenticationMiddleware = {
  protectedRoute: async (request, response, next) => {
    try {
      // First we want to access cookie
      const token = request.cookies?.jwtToken;

      // Checking token condition: token has or not
      if (!token) {
        return response
          .status(401)
          .json({
            success: false,
            message: "Unauthorized - No Token Provided",
          });
      }

      // Verfify the token
      const decoded = jwt.verify(token, jwtSecret);

      // Checking token condition: token was authorized or not
      if (!decoded) {
        return response
          .status(401)
          .json({ success: false, message: "Unauthorized - Invalid Token" });
      }

      // find user with jwt token and dis-select the password
      const user = await User.findById(decoded.userId).select("-password");

      // another checker here for user
      if (!user) {
        return response
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      // set user in request
      request.user = user;
      // calling the next() function
      next();
    } catch (error) {
      console.error(`Error While Checking Authentication: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
};

export default authenticationMiddleware; 