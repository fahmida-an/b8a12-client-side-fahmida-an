import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [userData, setUserData] = useState(null);

    const dbResponse = () => {
        axiosPublic(`/users/${user?.email}`)
            .then(res => {
                setUserData(res.data);
            })
            .catch(error => {
                console.error( error);
            });
    };

    if (user?.email && !userData) {
        dbResponse();
    }

    if (!userData) {
        return null;
    }

    return (
     
    
<div className="w-full mt-24 max-w-xl mx-auto h-[400px] bg-fuchsia-100  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <Link to={'/'}>
   <div className="flex justify-end p-6"><p className="text-xl font-bold text-fuchsia-900 underline">Back</p></div>
   </Link>
    <div className="flex flex-col items-center p-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.photoURL} alt="no image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.displayName}</h5>
        <span className="text-lg text-gray-500 dark:text-gray-400">{userData.email}</span>
        <span className="text-lg text-gray-500 dark:text-gray-400">Role:{userData.role}</span>
     
    </div>
</div>

    );
};

export default Profile;
