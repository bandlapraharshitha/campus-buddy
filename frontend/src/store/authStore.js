import { create } from "zustand";
import axios from "../axios";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,
  token: null,

    fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get("/auth/me", { withCredentials: true });
      set({ user: res.data.user, loading: false });
    } catch (err) {
      set({ user: null, loading: false });
      console.error("No active session:", err.response?.data?.message);
    }
  },

  signup: async (formData) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post("/auth/signup", formData, {
        withCredentials: true,
      });

      set({
        user: res.data.user,   // ✅ set user here
        token: res.data.token, // ✅ store token if needed
        loading: false,
      });

      return true; // indicate success
    } catch (err) {
      set({
        error: err.response?.data?.message || "Signup failed",
        loading: false,
      });
      return false; // indicate failure
    }
  },

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(
        "/auth/login",
        { email, password },
        { withCredentials: true }
      );

      set({
        user: res.data.user,
        token: res.data.token,
        loading: false,
      });

      return true;
    } catch (err) {
      set({
        error: err.response?.data?.message || "Login failed",
        loading: false,
      });
      return false;
    }
  },

  logout: async () => {
    try {
      await axios.post("/auth/logout", {}, { withCredentials: true });
      set({ user: null, token: null });
    } catch (err) {
      console.error("Logout failed", err);
    }
  },
}));
