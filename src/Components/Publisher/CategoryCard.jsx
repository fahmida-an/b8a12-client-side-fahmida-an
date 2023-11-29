import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import usePublisher from '../../hooks/usePublisher';
const CategoryCard = () => {
    const [publisher] = usePublisher();
    console.log(publisher);
    useEffect(() => {
        Aos.init();
      }, []);
      
    return (
      <>
       {
        publisher.map(publish => <div key={publish._id}>
            

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  
     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{publish.name}</h5>
   
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{publish.description}</p>
   
</div>

        </div>)
       }
      </>
    );
};

export default CategoryCard;