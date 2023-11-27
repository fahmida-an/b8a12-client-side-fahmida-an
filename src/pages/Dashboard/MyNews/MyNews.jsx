import { useContext } from "react";
import useNews from "../../../hooks/useNews";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyNews = () => {
  const [news] = useNews();
  const { user } = useContext(AuthContext);
  const email = user.email;

  const myNews = news.filter((item) => item.email === email);
  console.log(myNews);

  return (
    <div>
      <h1 className="py-10 items-center text-center font-bold text-3xl underline">My News: {myNews.length}</h1>
      {myNews.map((item) => (
        
        <div key={item._id}
        data-aos="fade-up"
        className=" w-[800px] rounded-md shadow-md dark:bg-gray-900 "
      >
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
        </div>
      </div>
      ))}
    </div>
  );
};

export default MyNews;
