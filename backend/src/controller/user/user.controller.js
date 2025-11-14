import mongoose from "mongoose";
import { User } from "../../model/index.js";

const userControllers = {
  getUsersForSidebar: async (request, response) => {
    const loggedInUserId = request.user._id;

    if (!mongoose.Types.ObjectId.isValid(loggedInUserId)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid user id" });
    }

    try {
      const filteredUsers = await User.find({
        _id: { $ne: loggedInUserId },
      }).select("-password");
      response
        .status(200)
        .json({
          success: true,
          message: "Fetch All User Successfully",
          filteredUsers,
        });
    } catch (error) {
      console.error(`Error while fetching users: ${error?.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
};

export default userControllers;
