import toast from "react-hot-toast";

const handleApi = {
    handleApiSuccess:(success) => {
        toast.success(success)
    },
    handleApiError:(error) => {
        toast.error(error)
    },
    apiError:(response) => {
    if(!response) {
      throw new Error("Invalid response from the Server")
    }
  }
}; 

export default handleApi; 