import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between border-b border-gray-200">
      <Link href="/" className="text-2xl font-bold tracking-tight">
        🍹 Cocktail Guide
      </Link>
      <div className="flex gap-6">
        <Link
          href="/"
          className="text-gray-600 hover:text-black transition-colors"
        >
          Explorar
        </Link>
        <Link
          href="/favorites"
          className="text-gray-600 hover:text-black transition-colors"
        >
          Favoritos
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
