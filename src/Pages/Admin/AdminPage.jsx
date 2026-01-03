import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import data from "./../../../../db.json";
import { FaAddressBook, FaAddressCard } from "react-icons/fa6";
function AdminPage() {
  //   const users = useSelector((state) => state.auth.allUsers);
  const users = data.users;
  const admin = useSelector((state) => state.auth.user);
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Admin Card */}
      <div className="w-full lg:w-1/4 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4 text-gray-700">
          <FaAddressCard className=" text-4xl" />
          <h2 className="text-lg font-semibold">Admin Details</h2>
        </div>

        <p className="text-gray-800">
          <span className="font-medium">Name:</span> {admin.FirstName}{" "}
          {admin.LastName}
        </p>
        <p className="text-gray-800">
          <span className="font-medium">Role:</span> Admin
        </p>
        <p className="text-gray-800">
          <span className="font-medium">Contact No:</span> {admin.Mobno}
        </p>
      </div>

      {/* Users List */}
      <div className="w-full lg:w-3/4 flex flex-wrap gap-6">
        {users?.map((user) =>
          user.Mobno == "0123456789" ? (
            ""
          ) : (
            <UserCard key={user.id} user={user} />
          )
        )}
      </div>
    </div>
  );
}

export default AdminPage;
