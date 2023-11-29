import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, Navigate} from "react-router-dom"

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading) {
        return <span>Loading...</span>
    }

    if(user?.email){
        return children;
    }
    return <Navigate to={'/signin'} state={location.pathname} replace></Navigate>
};

export default PrivateRoutes;