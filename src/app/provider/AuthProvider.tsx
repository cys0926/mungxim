"use client";

import { ReactNode, useEffect, useState } from "react";
import useAuthStore from "@/shared/store/authStore";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { checkAuth, anonymousLogin } = useAuthStore((state) => state.actions);
  const loading = useAuthStore((state) => state.loading);

  useEffect(() => {
    checkAuth();

    return () => checkAuth();
  }, []);

  if (loading) {
    return null;
  }
  return children;
};
