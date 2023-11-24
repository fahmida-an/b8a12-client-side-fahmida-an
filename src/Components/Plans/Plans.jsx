const Plans = () => {
  return (
    <div className="flex justify-evenly  mt-20">
      <div className="items-center text-center flex">
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-x font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          See Our Plans
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      
        <div className="w-72 h-[400px] bg-slate-200 border-2 border-gray-500 rounded-lg shadow flex items-center text-center">
          <div className="p-5">
            <h1 className="text-2xl font-bold">for free users</h1>

            <h5 className="mb-2 text-xl  text-gray-900 ">
              Latest News Feed
            </h5>
            <h5 className="mb-2 text-xl  text-gray-900 ">
              Categories & Filters
            </h5>
            <h5 className="mb-2 text-xl  text-gray-900 ">
              Breaking News Notifications
            </h5>
            <h5 className="mb-2 text-xl text-gray-900 ">
              Save & Bookmark Articles
            </h5>
          </div>
        </div>
      

      
        <div className="w-72 h-[400px]  bg-slate-200 border-2 border-gray-500 rounded-lg shadow flex items-center text-center">
          <div className="p-5">
            <h1 className="text-fuchsia-900 text-2xl font-bold">for premium users</h1>

            <h5 className="mb-2 text-xl  tracking-tight text-gray-900 ">
              Ad-Free Experience
            </h5>
            <h5 className="mb-2 text-xl  tracking-tight text-gray-900 ">
              Exclusive Content
            </h5>
            <h5 className="mb-2 text-xl  tracking-tight text-gray-900 ">
              Early Access to Articles
            </h5>
            <h5 className="mb-2 text-xl  tracking-tight text-gray-900 ">
              Customized News Alerts
            </h5>
          </div>
        </div>
      </div>
   

  );
};

export default Plans;
