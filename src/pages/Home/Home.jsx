import {Helmet} from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Publisher from "../../Components/Publisher/Publisher";
import Statistics from "../../Components/Statistics/Statistics";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NewsPaper || Home</title>
            </Helmet>
            <Banner></Banner>
            <Publisher></Publisher>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;