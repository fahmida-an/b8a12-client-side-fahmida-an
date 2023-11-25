import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import {toast} from "react-hot-toast"
import {useNavigate} from "react-router-dom"
const PremiumCard = ({premium}) => {
    const {name,_id,price} = premium;
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

const handlePremiumUser = () => {
    if(user && user.email) {
        const premiumUser = {
            premiumId: _id,
            email: user.email,
            name,
            price
        };

        axiosPublic.post('/premiumPackage', premiumUser)
        .then((res)=>
         { console.log(res.data)

        if(res.data.insertedId){
            toast.success(`${name} added, Now pay!`)
            //todo: navigate
            navigate('/premiumPackage')
        }
    })


    }
}
    return (
        <div className="w-52 h-24 bg-fuchsia-200">
        <h2>Package Name:{name}</h2>
        <p> package price: {price}</p>
        {
            premium.length ==0 || premium.length == 1 ? <button onClick={handlePremiumUser}  disabled
            className="btn btn-outline bg-slate-300 border-yellow-700 border-0 border-b-4 mt-4 "
          >
            Premium Membership
          </button>
          :
          <button onClick={handlePremiumUser}
        className="btn btn-outline bg-slate-300 border-yellow-700 border-0 border-b-4 mt-4 "
      >
        Premium Membership
      </button>
        }
        </div>
    );
};

export default PremiumCard;