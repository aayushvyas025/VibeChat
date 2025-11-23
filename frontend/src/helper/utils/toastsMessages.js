import toast from "react-hot-toast"

const toastMessages = {
  successToast:(success) => {
    toast.success(success)
  },
  errorToast:(error) => {
    toast.error(error)
  }
}

export default toastMessages;