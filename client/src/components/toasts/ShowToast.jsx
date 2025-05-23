import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    style: {
        background: "#15803d",
        color: "white",  
        fontWeight: "bold",
        border: "1px solid #22c55e",
        borderRadius: "8px",
    },
    progressStyle: { background: "#ffd700" },
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    style: {
        background: "#b91c1c",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "8px",
    },
    progressStyle: { background: "#ff4747" },
  });
};

const ToastWrapper = () => <ToastContainer />;
export default ToastWrapper;
