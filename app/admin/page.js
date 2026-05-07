import { cookies } from "next/headers";

export default function AdminPage() {
  const cookieStore = cookies();

  const token = cookieStore.get("token");

  if (!token) {
    return <h1>Access denied</h1>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>
    </div>
  );
}