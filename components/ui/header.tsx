"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
      {/* InvestMatch button on the left */}
      <Link href="/">
        <h1 className="text-2xl font-bold cursor-pointer">InvestMatch</h1>
      </Link>

      {/* Navigation links on the right */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          </li>
          <li>
            <Link href="/explore" className="hover:underline">Explore</Link>
          </li>
          <li>
            <Link href="/profile" className="hover:underline">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
