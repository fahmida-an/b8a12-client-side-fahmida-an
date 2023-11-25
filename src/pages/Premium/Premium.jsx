import usePremium from "../../hooks/usePremium";
import PremiumCard from "./PremiumCard";

const Premium = () => {
const [premium] = usePremium();


            
    return (
        <div>
          {
            premium.map(premium => <PremiumCard key={premium._id} premium = {premium}></PremiumCard> )
          }
        </div>
    );
};

export default Premium;