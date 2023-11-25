// import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import usePremiumPackage from "../../hooks/usePremiumPackage";

const PremiumPackage = () => {
    const [premiumPackage] = usePremiumPackage()
    console.log(premiumPackage);
    const totalPrice = premiumPackage.reduce((total, item) => total + item.price, 0)
    // const axiosPublic = useAxiosPublic()
    return (
        <div>
            <div className="w-52 h-28">
                    <h2>name: {premiumPackage.length}</h2>
                    <p>total price: $ {totalPrice}</p>
                   <Link to={'/payment'}>
                   <button className="btn"> pay</button>
                   </Link>
            </div>
        </div>
    );
};

export default PremiumPackage;