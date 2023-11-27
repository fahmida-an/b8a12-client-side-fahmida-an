import useNews from "../../hooks/useNews";
import  Typewriter  from "typewriter-effect";
const AllArticle = () => {
    const [news] = useNews()
    const allNews = news.filter((item) => item.status === "approved");
    const sortedNews = allNews.sort((a, b) => {
        // localeCompare is use for case-insensitive sorting
        return b.date.localeCompare(a.date);
      });
    return (
        <div className="max-w-screen-xl mx-auto bg-fuchsia-50">
        <h1 className="py-10 items-center text-center font-bold text-3xl">
        <Typewriter
           options={{
            autoStart: true,
            loop: true,
            delay: 60,
            strings: 'All News'
           }}
           >
           </Typewriter>
        </h1>
        {sortedNews.map((item) => (
          
          <div key={item._id}
          className=" max-w-4xl mx-auto bg-white rounded-md shadow-md dark:bg-gray-900 "
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

export default AllArticle;