import PublisherCard from "./PublisherCard";
import useNews from "../../hooks/useNews";
import { useState } from "react";

const Publisher = () => {
   const [news] = useNews();
   const [showAll, setShowAll] = useState(false);
   const newsAll = showAll ? news :  news.slice(0,6)
  return (
    <div className="mt-24 grid grid-cols-5">
     <div className="grid-cols-3 grid col-span-4">
     {
        newsAll.map(news => <PublisherCard key={news.id} news={news}></PublisherCard>)
     }


   <div>
   <button className="text-white bg-fuchsia-900 rounded-lg px-5 py-2.5 text-center mr-2 mb-2 mt-2" onClick={()=> setShowAll(!showAll)}>
        {
          showAll ? "Show Less" : 'Show All'
        }
      </button>
   </div>


     </div>

     <div>
        <h2>premium</h2>
     </div>

     
    </div>
  );
};

export default Publisher;
