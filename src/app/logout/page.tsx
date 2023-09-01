"use client";

import PageHeader from "@/components/PageHeader";
import { useAuthContext } from "@/context/AuthContext";

const LogoutPage = () => {
  const { handleLogout } = useAuthContext();

  return (
    <div>
      <PageHeader pageName="LogoutPage" />

      <button
        className="border-cyan-600 border-solid border-2 px-6 py-2 hover:bg-cyan-600 hover:text-white"
        onClick={handleLogout}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutPage;
