"use client";

import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <nav className="mb-2">
      <ul className="flex gap-2">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>

        {user ? (
          <>
            <li>
              <Link href="/profile" className="hover:underline">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/logout" className="hover:underline">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
