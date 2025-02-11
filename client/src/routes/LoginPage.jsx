import React from "react";
import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] items-center justify-center md:h-[calc(100vh-80px)]">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LoginPage;
