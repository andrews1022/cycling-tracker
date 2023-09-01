"use client";

import { useAuthContext } from "@/context/AuthContext";

const ProfileData = () => {
  const { user } = useAuthContext();

  return (
    <div className="mt-4">
      <h2 className="font-bold text-1xl">User Data:</h2>
      <p>{user?.displayName}</p>
      <p>{user?.email}</p>
      <p>{user?.uid}</p>
    </div>
  );
};

export default ProfileData;
