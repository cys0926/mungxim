import { create } from "zustand";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "../config";
import { User } from "@firebase/auth";

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
};

type AuthAction = {
  setUser: (user: User) => void;
  anonymousLogin: () => Promise<void>;
  checkAuth: () => void;
};

type AuthStore = AuthState & {
  actions: AuthAction;
};

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: true,
  actions: {
    setUser: (user: User) =>
      set({ user, isAuthenticated: !!user, loading: false }),
    anonymousLogin: async () => {
      try {
        const userCredential = await signInAnonymously(auth);
        set({
          user: userCredential.user,
          isAuthenticated: true,
          loading: false,
        });
      } catch (error) {
        console.error("Error signing in anonymously:", error);
        set({ loading: false });
      }
    },
    checkAuth: () => {
      set({ loading: true });
      onAuthStateChanged(auth, (user) => {
        console.log(user)
        set({ user, isAuthenticated: !!user, loading: false });
      });
    },
  },
}));

export default useAuthStore;
