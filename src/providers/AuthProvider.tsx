"use client";

import useAuthStore from "@/store/useAuthStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { objectId } = useAuthStore();
  const { setIsAuthLogin } = useAuthStore();

  const sessionLogin = async () => {
    try {
      const res = await axios.get("/api/authentication/session-login", {
        headers: {
          authorization: objectId,
        },
      });

      console.log(res.data);
      setIsAuthLogin({
        username: res?.data?.data?.username,
        objectId: res?.data?.data?.objectId,
      });
    } catch (error) {
      toast.error("Email not found, please login again!");
      setIsAuthLogin({ username: "", objectId: "" });
      router.replace("/login");
    }
  };

  useEffect(() => {
    if (objectId) sessionLogin();
  }, [objectId]);

  return <>{children}</>;
}
