import  Typewriter  from "typewriter-effect";
import useNews from "../../hooks/useNews";
import useUsers from "../../hooks/useUsers";
import ReactChart from "../../Components/ReactChart/ReactChart";
const AdminHome = () => {
    const [news] = useNews();
    const[users] = useUsers();
    const publishedNews = news.filter(item=> item.status === "approved")
  return (
    <div>
      <h2 className="pb-12 pt-3 text-center items-center text-3xl font-bold">
      <Typewriter
           options={{
            autoStart: true,
            loop: true,
            delay: 60,
            strings: 'Admin Home'
           }}
           >
           </Typewriter>
      </h2>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 ">
       <div>
       <a
          href="#"
          className="block max-w-sm mx-auto  h-[120px] p-6 bg-fuchsia-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Users
          </h5>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
           {users.length}
          </p>
        </a>
       </div>
       <div>
       <a
          href="#"
          className="block max-w-sm mx-auto h-[120px] p-6 bg-fuchsia-100 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Articles
          </h5>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
            {news.length}
          </p>
        </a>
       </div>
       <div>
       <a
          href="#"
          className="block max-w-sm mx-auto h-[120px] p-6 bg-gray-300 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Published Article 
          </h5>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
            {publishedNews.length}
          </p>
        </a>
       </div>
       <div>
       <a
          href="#"
          className="block max-w-sm mx-auto h-[120px] p-6 bg-fuchsia-100 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Publisher
          </h5>
          <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
            Here 
          </p>
        </a>
       </div>
      </div>



      {/* React Chart */}
      <ReactChart></ReactChart>
    </div>
  );
};

export default AdminHome;
