import { create } from "zustand";

export const useAuthStore = create((set) => ({
    isAuth: !!localStorage.getItem("product-token"),
    loginAuth: (token) => {
        localStorage.setItem("product-token", token)
        set({ isAuth: true });
    },
    logoutAuth: () => {
        localStorage.removeItem("product-token")
        set({ isAuth: false });
    }
}))

export default useAuthStore