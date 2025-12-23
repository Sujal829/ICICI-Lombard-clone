import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import data from "./../../../../db.json"
function AdminPage() {
//   const users = useSelector((state) => state.auth.allUsers); 
  const users = data.users

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
