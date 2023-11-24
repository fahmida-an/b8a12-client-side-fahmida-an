import {Helmet} from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Publisher from "../../Components/Publisher/Publisher";
import Statistics from "../../Components/Statistics/Statistics";
import Plans from "../../Components/Plans/Plans";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NewsPaper || Home</title>
            </Helmet>
            <Banner></Banner>
            <Publisher></Publisher>
            <Statistics></Statistics>
            <Plans></Plans>
            <Footer></Footer>
        </div>
    );
};

export default Home;