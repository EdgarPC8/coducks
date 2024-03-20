import { create } from "zustand";
import { verifyAccessToken } from "../api/auth";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  checkingAuth: true,
  setIsAuth: () => set({ isAuthenticated: true }),
  setCheckingAuth: () => set({ checkingAuth: false }),
  logout: () => {
    localStorage.removeItem("token");
    set((state) => ({ isAuthenticated: false }));
  },
  updateUser: (userN) => set((state) => ({ user: userN })),
}));

export { useAuthStore };
