'use client';
import AuthButton from './AuthButton';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Auth0 + NextAuth</h1>
      <AuthButton />
    </nav>
  );
}
