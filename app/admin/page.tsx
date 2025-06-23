import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);


  if (!session || session.user?.role !== 'admin') {
    redirect('/unauthorized');
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-red-600">Admin Panel</h1>
      <p>Hoş geldin, {session.user?.email}</p>
    </div>
  );
}
