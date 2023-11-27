import PublisherCard from "./PublisherCard";
import useNews from "../../hooks/useNews";
import { useContext } from "react";
import CategoryCard from "./CategoryCard";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import  Typewriter  from "typewriter-effect";

const Publisher = () => {
   const [news] = useNews();
  //  const [showAll, setShowAll] = useState(false);
  const {user} = useContext(AuthContext)
  //  const newsAll = showAll ? news :  news.slice(0,6)
   const newsAll = news.slice(0,6)
  return (

    <>
    <div className="flex flex-col text-center items-center justify-center mt-24 space-y-2">
      <h2 className="text-4xl font-bold">
      <Typewriter
           options={{
            autoStart: true,
            loop: true,
            delay: 200,
            strings: 'Breaking News'
           }}
           >
           </Typewriter>
      </h2>
      <p>Explore Our Website for the Latest Breaking News Updates!</p>
    </div>
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3">
     <div className="lg:grid-cols-1 grid grid-cols-1 lg:col-span-2 gap-2 mx-auto">
     {
        newsAll.map(news => <PublisherCard key={news.id} news={news}></PublisherCard>)
     }


   {/* <div>
   <button className="text-white bg-fuchsia-900 rounded-lg px-5 py-2.5 text-center mr-2 mb-2 mt-2 mx-auto" onClick={()=> setShowAll(!showAll)}>
        {
          showAll ? "Show Less" : 'Show All'
        }
      </button>
   </div> */}

{
  user ? <Link to={'/allArticle'}>
  <button className="text-white bg-fuchsia-900 rounded-lg px-5 py-2.5 text-center mr-2 mb-2 mt-2 mx-auto">Show All</button>
  </Link>
  :
  <Link to={'/signin'}>
  <button className="text-white bg-fuchsia-900 rounded-lg px-5 py-2.5 text-center mr-2 mb-2 mt-2 mx-auto">Show All</button>
  </Link>

}


     </div>

     <div className="mx-auto">
       {
        newsAll.map(news => <CategoryCard key={news.id} news={news}></CategoryCard>)
       }
     </div>

     
    </div>
    </>
  );
};

export default Publisher;
