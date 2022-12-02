import { useToast } from "vue-toastification";
const toast = useToast()
const toastOptions = {
    position: "bottom-center",
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: false,
    icon: true,
    rtl: false,
    toastClassName: 'custom-app-toast',
}

export function success(message) {
    toast.success(message, toastOptions);
}
export function error(message) {
    toast.error(message, toastOptions);
}
export function info(message) {
    toast.info(message, toastOptions);
}
export function warning(message) {
    toast.warning(message, toastOptions);
}