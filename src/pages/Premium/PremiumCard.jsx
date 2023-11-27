import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import card from "../../assets/images/card.jpg";
import  Typewriter  from "typewriter-effect";
const PremiumCard = ({ premium }) => {
  const { name, _id, price } = premium;
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePremiumUser = () => {
    if (user && user.email) {
      const premiumUser = {
        premiumId: _id,
        email: user.email,
        name,
        price,
      };

      axiosPublic.post("/premiumPackage", premiumUser).then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          toast.success(`${name} added, Now pay!`);
          //todo: navigate
          navigate("/payment");
        }
      });
    }
  };
  return (
    <>
      <div className="max-w-5xl mx-auto h-[300px] mt-20">
        <img
          className="object-cover object-center  w-full rounded-t-md h-[300px] mx-auto"
          src={card}
          alt=""
        />
      </div>

      <div className="flex justify-between max-w-5xl mx-auto mt-10">
        <div className="flex-1">
            <h2 className="font-bold text-3xl">Advantages of Premium User</h2>
            <p className="mt-2">

            <Typewriter
           options={{
            autoStart: true,
            loop: true,
            delay: 60,
            strings: 'Premium users often have access to exclusive features and functionalities that are not available to free users. This can include advanced tools, customization options, or enhanced capabilities.'
           }}
           >
           </Typewriter>
            </p>


            <p className="mt-2">
            <Typewriter
           options={{
            autoStart: true,
            loop: true,
            delay: 60,
            strings: 'Premium users may enjoy an ad-free experience while using the platform. This can enhance the overall user experience and reduce interruptions during their interaction with the service.'
           }}
           >
           </Typewriter>
            </p>
            <p className="mt-2">
            <Typewriter
           options={{
            autoStart: true,
            loop: true,
            delay: 60,
            strings: 'Premium users typically receive priority customer support. This can include faster response times, dedicated support channels, or access to premium support resources'
           }}
           >
           </Typewriter>
            </p>
            
        </div>
        <div className="max-w-xl h-[300px] mx-auto mt-3 py-12 bg-fuchsia-100 flex-1">
          <h2 className="text-center p-4 font-bold">Package Name:{name}</h2>
          <p className="text-center px-4 font-bold"> package price: {price}</p>
          <div className="flex justify-center items-center px-4">
            {premium.length == 0 || premium.length == 1 ? (
              <Link to={"/payment"}>
                <button
                  onClick={handlePremiumUser}
                  disabled
                  className="btn bg-fuchsia-900 text-white mt-4 text-center hover:bg-fuchsia-800 "
                >
                  Premium Membership
                </button>
              </Link>
            ) : (
              <Link to={"/payment"}>
                <button
                  onClick={handlePremiumUser}
                  className="btn bg-fuchsia-900 text-white mt-4 flex text-center hover:bg-fuchsia-800 "
                >
                  Premium Membership
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumCard;
