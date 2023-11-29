import usePremium from "../../hooks/usePremium";
import PremiumCard from "./PremiumCard";
import { Helmet } from "react-helmet-async";
const Premium = () => {
const [premium] = usePremium();


            
    return (
        <div>
              <Helmet>
    <title>NewsChannel || Premium</title>
  </Helmet>
          {
            premium.map(premium => <PremiumCard key={premium._id} premium = {premium}></PremiumCard> )
          }
        </div>
    );
};

export default Premium;