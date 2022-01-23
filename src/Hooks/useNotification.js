import { toast } from 'react-toastify';
const useNotification = () =>{
    // Success Message
    const successNotify = (message) =>{
        toast.success(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    // Error Message
    const errorNotify = (message) =>{
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return {successNotify}
}
export default useNotification