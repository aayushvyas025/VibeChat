import toast from "react-hot-toast";

const handleApi = {
    handleApiSuccess:(success) => {
        toast.success(success)
    },
    handleApiError:(error) => {
        toast.error(error)
    }
}; 

export default handleApi; 