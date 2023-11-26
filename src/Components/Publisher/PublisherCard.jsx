import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const PublisherCard = ({news}) => {

    const {_id, title, image, details} = news;

    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <div className='mt-6'>
  

<div data-aos="fade-up" className=" max-w-xs rounded-md shadow-md dark:bg-gray-900 ">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
	<div className="flex flex-col justify-between p-6 space-y-4">
		<div className="space-y-1">
			<h2 className="text-xl font-semibold ">{title}</h2>
			{
                details.length > 50 ? 
                <p className="dark:text-gray-100">{details.slice(0,50)}</p>
                :
                <p className="dark:text-gray-100">{details}</p>
            }
		</div>
		<Link to={`/news/${_id}`}>
        <button className="btn flex items-center justify-center w-full p-3 font-semibold tracki rounded-md">Continue</button>
        </Link>
	</div>
</div>
     </div>
      
    );
};

export default PublisherCard;