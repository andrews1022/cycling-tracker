"use client";

import { useAuthContext } from "@/context/AuthContext";

const LogoutPage = () => {
  const { handleLogout } = useAuthContext();

  return (
    <div>
      <h1 className="font-bold text-2xl">LogoutPage</h1>
      <p>Some content on the LogoutPage could go here.</p>

      <button
        className="border-cyan-600 border-solid border-2 py-2 px-6 hover:bg-cyan-600 hover:text-white"
        onClick={handleLogout}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutPage;
