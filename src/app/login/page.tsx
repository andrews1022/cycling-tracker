"use client";

import signIn from "@/firebase/auth/signIn";

const LoginPage = () => {
  const handleLogin = async () => await signIn();

  return (
    <div>
      <h1 className="font-bold text-2xl">LoginPage</h1>
      <p>Some content on the LoginPage could go here.</p>

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
