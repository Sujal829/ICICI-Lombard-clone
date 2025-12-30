import { useNavigate, useParams } from "react-router-dom";
import data from '../../../../db.json'
import axios from "axios";
import { toast } from "react-toastify";
function Userinfo() {
  const { id } = useParams();
    const user = data.users.find((i)=>i.id==id)
    const navigate = useNavigate()
  const handledelete = async(p)=>{
    try {
      const res =await axios.get(`http://localhost:5000/users/${id}`);
      const data = res.data
      const filter =data.insurance.filter((data,index)=>index!=p) 
      const updatedata = await axios.patch(`http://localhost:5000/users/${id}`,{insurance: filter})
      if(updatedata){
        toast.success("Record deleted Successfully !");
      }
    } catch (error) {
      toast.error(error);
    }
  }
  if (!user) return <h3>User not found</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <p className="bg-gray-200 h-10 w-20 rounded-lg p-6 hover:bg-gray-100" onClick={()=>navigate("/admin")}>Back</p>
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
            <button className="h-10 w-20 text-white bg-danger rounded-2" onClick={()=>handledelete(index)}>Delete</button>
            {/* <p><b>Pincode:</b> {policy.pincode}</p>
            <p><b>Amount:</b> ₹{policy.costofConstruction}</p> */}
          </div>
        ))
      )}
    </div>
  );
}

export default Userinfo;
