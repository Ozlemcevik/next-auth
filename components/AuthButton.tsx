'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaSignInAlt } from 'react-icons/fa';

export default function AuthButton() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return (
      <button
        onClick={async () => {
          await signOut({ callbackUrl: '/' });
        }}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Çıkış Yap
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn('auth0', { callbackUrl: '/dashboard' })}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
    >
       <FaSignInAlt size={18} />
      Giriş Yap
    </button>
  );
}
