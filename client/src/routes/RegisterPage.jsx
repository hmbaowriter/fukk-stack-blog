import React from "react";
import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
  return (
    <div className="flex h-[calc(100vh-64px)] items-center justify-center md:h-[calc(100vh-80px)]">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default RegisterPage;
