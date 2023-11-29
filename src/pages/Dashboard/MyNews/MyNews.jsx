import { useContext } from "react";
import useNews from "../../../hooks/useNews";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import {toast} from "react-hot-toast"
import { Helmet } from "react-helmet-async";

const MyNews = () => {
  const [news, refetch] = useNews();
  const axiosPublic = useAxiosPublic()
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const myNews = news.filter((item) => item.email === email);
  console.log(myNews);

  const handleDeleteItem = id => {
    
            axiosPublic.delete(`/news/${id}`)
            .then(res => {
                console.log(res.data);
                if(res.data.deletedCount > 0){
                  refetch();
                  toast.success('your news article deleted')
                }
              })
}


  const {loading} = useContext(AuthContext)
  if(loading){
    return <span>loading...</span>
}

  return (
    <div className="max-w-4xl mx-auto">
         <Helmet>
      <title>NewsChannel || My News</title>
    </Helmet>
      <h1 className="py-10 items-center text-center font-bold text-3xl underline">My News: {myNews.length}</h1>
      {myNews.map((item) => (
        
        <div key={item._id} className=" w-[300px] lg:w-[800px] mx-auto overflow-x-auto" >
         <div className="flex justify-between font-bold px-6 my-3">
            <p>Published by: {item.publisher}</p>
            <p>Date: {item.date}</p>
            </div>
        <img
          src={item.image}
          alt=""
          className="object-cover object-center p-6 w-full rounded-t-md h-60 "
        />
        <div className="flex flex-col justify-between p-6 space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold ">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.details}</p>
          </div>
          <div className="flex items-center justify-center">
           <Link to={`/news/update/${item._id}`}>
           <button className="btn btn-sm bg-yellow-500 hover:bg-yellow-400">Update</button>
           </Link>
            <button onClick={()=>handleDeleteItem(item._id)}  className="btn btn-sm bg-red-500 hover:bg-red-600">Delete</button>
          </div>
        </div>
       </div>
      ))}
    </div>
  );
};

export default MyNews;
