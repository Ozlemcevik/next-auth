'use client';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Yükleniyor...</p>;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {session ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Hoş geldiniz, {session.user?.name}!</h1>
          <p>Dashboard sayfasına <a href="/dashboard" className="text-blue-600 underline">göz atabilirsiniz</a>.</p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">Hoşgeldiniz! Lütfen giriş yapınız.</h1>
        </>
      )}
    </main>
  );
}
