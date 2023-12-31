import { FaTrash, FaUsers } from "react-icons/fa";
import toast from "react-hot-toast"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUsers from "../../../hooks/useUsers";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const [users, refetch]= useUsers();
 
    const handleDelete = id => {
       axiosSecure.delete(`/users/${id}`)
       .then(res => {
        console.log(res);
        if(res.data.deletedCount > 0){
            refetch()
           toast.success(`${user.email} deleted`)
        }
    })
  }
  
    const handleMakeAdmin = user => {
      axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
          console.log(res);
          if(res.data.modifiedCount > 0){
              refetch()
             toast.success(`${user.email} is admin now`)
          }
      })
    }

    return (
    <div>
        <Helmet>
      <title>NewsChannel || All Users</title>
    </Helmet>
        <div className="bg-fuchsia-100">
        <div className="flex max-w-4xl mx-auto text-center items-center justify-center font-bold py-10 border-b-2 border rounded-lg ">
          <h2 className="text-3xl">Total Users: {users.length}</h2>
        </div>
  
        <div className="overflow-x-auto overflow-y-auto w-[300px] lg:w-[800px] mx-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="font-bold">Email</th>
                <th className="font-bold">Role</th>
                <th className="font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                  users.map((user,index) => <tr key={user._id} className="bg-fuchsia-100">
                  <th>{index + 1}</th>
                  <td>{user.email}</td>
                  <td>
              { user.role === 'admin'? 'Admin'
              : <button
              onClick={()=> handleMakeAdmin(user)} 
              className="btn btn-sm bg-fuchsia-900">
              <FaUsers className="text-white"></FaUsers>
              </button>}
                  </td>
                  <td>
                  <button
                onClick={()=> handleDelete(user._id)} 
                 className="btn btn-sm">
                  <FaTrash className="text-red-600 bg-fuchsia-200"></FaTrash>
                </button>
                  </td>
                </tr> )
              }
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default AllUsers;