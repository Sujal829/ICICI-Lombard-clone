import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "250px",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/admin/user/${user.id}`)}
    >
      <h4>{user.FirstName}</h4>
      <p>Email: {user.email}</p>
      <p>Mob.No: {user.Mobno}</p>
      <p>
        Policies Purchased: <b>{user.insurance?.length || 0}</b>
      </p>
    </div>
  );
}

export default UserCard;
