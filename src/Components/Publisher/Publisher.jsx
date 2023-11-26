import PublisherCard from "./PublisherCard";
import useNews from "../../hooks/useNews";
import { useState } from "react";
import CategoryCard from "./CategoryCard";

const Publisher = () => {
   const [news] = useNews();
   const [showAll, setShowAll] = useState(false);
   const newsAll = showAll ? news :  news.slice(0,6)
  return (
    <div className="mt-24 grid grid-cols-1 lg:grid-cols-3">
     <div className="lg:grid-cols-1 grid grid-cols-1 lg:col-span-2 gap-2 mx-auto">
     {
        newsAll.map(news => <PublisherCard key={news.id} news={news}></PublisherCard>)
     }


   <div>
   <button className="text-white bg-fuchsia-900 rounded-lg px-5 py-2.5 text-center mr-2 mb-2 mt-2 mx-auto" onClick={()=> setShowAll(!showAll)}>
        {
          showAll ? "Show Less" : 'Show All'
        }
      </button>
   </div>


     </div>

     <div className="mx-auto">
       {
        newsAll.map(news => <CategoryCard key={news.id} news={news}></CategoryCard>)
       }
     </div>

     
    </div>
  );
};

export default Publisher;
