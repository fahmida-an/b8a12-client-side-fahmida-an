import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const CategoryCard = ({news}) => {

    const {category} = news;
    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <div data-aos="fade-left" className="mt-6">
            <div className="w-60 h-14 border bg-slate-100 text-center items-center justify-center hover:bg-slate-300 rounded-xl">
                    <h2 className=" font-bold mt-3">{category}</h2>
            </div>
        </div>
    );
};

export default CategoryCard;