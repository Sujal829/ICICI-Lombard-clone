import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import data from '../../../../db.json'
function Userinfo() {
  const { id } = useParams();
    const user = data.users.find((i)=>i.id==id)
//   const user = useSelector((state) =>
//     state.auth.allUsers.find((u) => u.id === Number(id))
//   );

  if (!user) return <h3>User not found</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{user.FirstName}'s Policies Purchased</h2>

      {user.insurance?.length === 0 ? (
        <p>No policy purchased yet</p>
      ) : (
        user.insurance.map((policy, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              borderRadius: "6px",
            }}
          >
            <p><b>Type:</b> {policy.inctype}</p>
            <p>{policy.carno && <><b>Vheical No: </b>{policy.carno}</>}</p>
            <p>{policy.type && <><b>Policy For:</b> {policy.type}</>}</p>
            {/* <p><b>Pincode:</b> {policy.pincode}</p>
            <p><b>Amount:</b> ₹{policy.costofConstruction}</p> */}
          </div>
        ))
      )}
    </div>
  );
}

export default Userinfo;
