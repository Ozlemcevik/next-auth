'use client';

import { useSession } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">🔐 Protected Sayfa</h1>
      <p className="mt-4">Hoş geldin {session?.user?.email}</p>
    </main>
  );
}
