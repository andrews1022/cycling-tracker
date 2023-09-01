"use client";

import PageHeader from "@/components/PageHeader";
import signInWithGoogle from "@/firebase/auth/signInWithGoogle";

const LoginPage = () => {
  const handleLogin = async () => await signInWithGoogle();

  return (
    <div>
      <PageHeader pageName="LoginPage" />

      <button
        className="border-cyan-600 border-solid border-2 py-2 px-6 hover:bg-cyan-600 hover:text-white"
        onClick={handleLogin}
        type="button"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
