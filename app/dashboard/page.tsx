import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { FaUserCircle } from 'react-icons/fa';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/signin');

  const { name, email } = session.user!;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
        <div className="flex flex-col items-center gap-2 mb-6">
          <FaUserCircle className="text-5xl text-gray-600" />
          <h1 className="text-2xl font-bold">Hoş Geldin!</h1>
          <p className="text-gray-600">{name || email}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">📊 Hızlı Erişim</h2>
          <ul className="space-y-2 text-left">
            <li className="bg-blue-100 px-4 py-2 rounded hover:bg-blue-200 transition">🛠️ Profilini Düzenle</li>
            <li className="bg-green-100 px-4 py-2 rounded hover:bg-green-200 transition">📁 Belgelerini Gör</li>
            <li className="bg-yellow-100 px-4 py-2 rounded hover:bg-yellow-200 transition">🔒 Şifre Değiştir</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
