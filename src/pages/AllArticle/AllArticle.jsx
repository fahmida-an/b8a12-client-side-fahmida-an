import { useState } from "react";
import useNews from "../../hooks/useNews";
import Typewriter from "typewriter-effect";
import InfiniteScroll from "react-infinite-scroller";
const AllArticle = () => {
  // const [search, setSearch] = useState("");
  const [news] = useNews();

  const allNews = news.filter((item) => item.status === "approved");
  const sortedNews = allNews.sort((a, b) => {
    // localeCompare is use for sorting
    return b.date.localeCompare(a.date);
  });

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  const loadFunc = () => {};

  // search
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const searchText = e.target.search.value;
  //   if (searchText) {
  //     setSearch(searchText);
  //   }
  // };

  return (
    <div
      className="max-w-screen-xl mx-auto bg-fuchsia-50 "
      style={{ height: "650px", overflow: "auto" }}
    >
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true || false}
        loader={
          <div className="loader text-center" key={0}>
            Loading ...
          </div>
        }
        useWindow={false}
      >
        <h1 className="py-10 items-center text-center font-bold text-3xl">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 60,
              strings: "All News",
            }}
          ></Typewriter>
        </h1>

        {/* <form onSubmit={handleSearch} className="w-1/2 mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              name="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by title..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form> */}
        {sortedNews.map((item) => (
          <div
            key={item._id}
            className=" max-w-4xl mx-auto bg-white rounded-md shadow-md dark:bg-gray-900 "
          >
            <div className="flex justify-between font-bold px-6 pt-6 my-3">
              <p>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    strings: `Published By: ${item.publisher}`,
                  }}
                ></Typewriter>
              </p>
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
                <div>
                  {showAll ? (
                    <p className="dark:text-gray-100">{item.details}</p>
                  ) : (
                    <p className="dark:text-gray-100">
                      {item.details.length > 200
                        ? `${item.details.slice(0, 200)}`
                        : item.details}
                    </p>
                  )}

                  {item.details.length > 50 && (
                    <button
                      className="text-sm text-blue-500 cursor-pointer"
                      onClick={handleShowAll}
                    >
                      {showAll ? "Read Less" : "Read More.."}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default AllArticle;
