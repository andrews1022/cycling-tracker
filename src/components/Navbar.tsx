import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mb-2">
      <ul className="flex gap-2">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <Link href="/login" className="hover:underline">
          Login
        </Link>

        <Link href="/profile" className="hover:underline">
          Profile
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
