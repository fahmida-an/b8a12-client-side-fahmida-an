import { useState, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../Components/Banner/Banner';
import Publisher from '../../Components/Publisher/Publisher';
import Statistics from '../../Components/Statistics/Statistics';
import Plans from '../../Components/Plans/Plans';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import TeamSection from '../../Components/TeamSection/TeamSection';
import Testimonial from '../../Components/Testimonial/Testimonial';

const Home = () => {
  
  return (
    <div>
      <Helmet>
        <title>NewsChannel || Home</title>
      </Helmet>
    
     <Navbar></Navbar>
      <Banner />
      <Publisher />
      <Statistics />
      <Plans />
      <TeamSection />
      <Testimonial />
      <Footer />
   
    </div>
  );
};

export default Home;