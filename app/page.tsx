'use client';

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      {session ? (
        <>
          <p className="text-xl">👋 Merhaba, {session.user?.name}</p>
          <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">
            Çıkış Yap
          </button>
        </>
      ) : (
        <button onClick={() => signIn("auth0")} className="bg-blue-600 text-white px-4 py-2 rounded">
          Giriş Yap (Auth0)
        </button>
      )}
    </main>
  );
}
