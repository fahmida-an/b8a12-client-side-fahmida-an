import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import {toast} from "react-hot-toast"
import {Link, useNavigate} from "react-router-dom"
import card from "../../assets/images/card.jpg"
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
            navigate('/payment')
        }
    })


    }
}
    return (
        <div className="max-w-xl h-[400px] mx-auto mt-8 bg-fuchsia-100">
         <div className="flex justify-center items-center">
         <img  className="w-1/2" src={card} alt="" />
         </div>
        <h2 className="text-center p-4 font-bold">Package Name:{name}</h2>
        <p className="text-center px-4 font-bold"> package price: {price}</p>
       <div className="flex justify-center items-center px-4">
       {
            premium.length == 0 || premium.length == 1 ? 
            <Link to={'/payment'}>
            <button onClick={handlePremiumUser}  disabled
            className="btn bg-fuchsia-900 text-white mt-4 text-center "
          >
            Premium Membership
          </button>
            </Link>
            :
          <Link to={'/payment'}><button onClick={handlePremiumUser}
          className="btn bg-fuchsia-900 text-white mt-4 flex text-center "
        >
          Premium Membership
        </button></Link>
        }
       </div>
        </div>
    );
};

export default PremiumCard;