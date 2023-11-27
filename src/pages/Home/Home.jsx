import { useState, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../Components/Banner/Banner';
import Publisher from '../../Components/Publisher/Publisher';
import Statistics from '../../Components/Statistics/Statistics';
import Plans from '../../Components/Plans/Plans';
import Footer from '../../Components/Footer/Footer';
import Modal from 'react-awesome-modal';
import useRole from '../../hooks/useRole';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Shared/Navbar/Navbar';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [role] = useRole()
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsModalVisible(true);
    }, 10000);
    return () => clearTimeout(timeoutId);
  }, []);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Helmet>
        <title>NewsPaper || Home</title>
      </Helmet>
    
     <Navbar></Navbar>
      <Banner />
      <Publisher />
      <Statistics />
      <Plans />
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
        <h1 className='font-bold'>Welcome</h1>
        <p>See premium news!</p>
        <Link to={'/premium'} className='btn btn-sm bg-fuchsia-200'> <p>Get subscription from here </p> </Link>
        <button className='btn btn-sm bg-fuchsia-200' onClick={closeModal}>Close</button>
      </div>
       
      </Modal>
    }
    </div>
  );
};

export default Home;