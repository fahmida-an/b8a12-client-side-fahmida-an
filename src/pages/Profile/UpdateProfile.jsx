
// import { useContext } from 'react';
// import useAxiosPublic from '../../hooks/useAxiosPublic';
// import {toast} from "react-hot-toast"
// import { AuthContext } from '../../Provider/AuthProvider';

// const UpdateProfile = () => {
//     const axiosPublic = useAxiosPublic()
//     const {user} = useContext(AuthContext)

//     const handleUpdateProfile = async (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const name= form.name.value;
//         const email = form.email.value;

//           const updateArticle = {
//             name,
//            email,
//           };
      
//           console.log(updateArticle);
//           const newsRes = await axiosPublic.patch(`/users/${user.email}`, updateArticle);
//           if (newsRes.data.modifiedCount > 0) {
//             form.reset();
//             console.log('Form Reset');
//             toast.success('Updated');
//           }
       
        
        
//       };
//     return (
//         <div className="max-w-4xl mx-auto">
//         <h2 className="text-center py-6 font-bold text-4xl text-fuchsia-900">
//           Update Profile
//         </h2>
//         <form onSubmit={handleUpdateProfile} className="bg-fuchsia-100 max-w-3xl mx-auto rounded-lg shadow-xl p-6">
   
//             <div className="form-control w-full">
//               <label className="label">
//                 <span className="label-text font-bold">Name</span>
//               </label>
//               <label className="input-group">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   className="input input-bordered text-sm w-full "
//                   required
//                   defaultValue={user.displayName}
//                 />
//               </label>
//             </div>

//             <img src="" alt="" />
  
    
  

  
//           <div className="form-control w-full">
//             <label className="label">
//               <span className="label-text font-bold">Email</span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="email"
//                 name="email"
//                 className="input input-bordered text-sm w-full"
//                 required
//                 defaultValue={user.email}
//               />
//             </label>
//           </div>
     
  
  
//           <div className="py-4 px-8 flex items-center justify-center">
//             <input type="submit" value="Update Profile" className="w-1/2 tems-center text-white bg-fuchsia-900 px-5 py-2.5 text-center rounded-lg"  />
  
  
//             </div>
          
//         </form>
//       </div>
//     );
// };

// export default UpdateProfile;