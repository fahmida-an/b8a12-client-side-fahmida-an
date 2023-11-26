import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AllUsers = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await axiosPublic.get("/users")
        return res.data;
      },
    });

    
    const handleDelete = id => {
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
              axiosPublic.delete(`/users/${id}`)
              .then(res => {
                  console.log(res.data);
                  if(res.data.deletedCount > 0){
                      refetch();
                      Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success"
                        });
                  }
              })
  
          }
        });
  
  }
  
    const handleMakeAdmin = user => {
      axiosPublic.patch(`/users/admin/${user._id}`)
      .then(res => {
          console.log(res);
          if(res.data.modifiedCount > 0){
              refetch()
             toast.success(`${user.email} is admin now`)
          }
      })
    }

    return (
        <div className="bg-fuchsia-100">
        <div className="flex text-center items-center justify-center font-bold py-10 border-b-2 border rounded-lg ">
          <h2 className="text-3xl">Total Users: {users.length}</h2>
        </div>
  
        <div className="overflow-x-auto overflow-y-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
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
    );
};

export default AllUsers;