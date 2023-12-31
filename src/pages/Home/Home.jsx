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
import Modal from 'react-awesome-modal';
import useRole from '../../hooks/useRole';
import { Link } from 'react-router-dom'

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [role] = useRole()
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsModalVisible(true);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  const closeModal = () => {
    setIsModalVisible(false);
  };
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
      {
        role === 'normal' &&
        <Modal
        visible={isModalVisible}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
   
        <div className="flex flex-col text-center justify-center items-center py-24 space-y-1">
        <h1 className='font-bold'>Welcome to the NewsChannel</h1>
        <p>See all premium article</p>
        <Link to={'/premium'} className='btn btn-sm bg-fuchsia-200'> <p>Get subscription from here </p> </Link>
        <button className='btn btn-sm bg-fuchsia-300' onClick={closeModal}>Close</button>
      </div>
       
      </Modal>
    }
    </div>
  );
};

export default Home;