import  Typewriter  from "typewriter-effect";
const Plans = () => {
  return (
    <div className="bg-gray-100  ">
     <div className="text-center items-center justify-center pt-24 space-y-2">
     <h2 className="text-4xl font-bold mb-4">
      <Typewriter
           options={{
            autoStart: true,
            loop: true,
            delay: 200,
            strings: 'User Plan'
           }}
           >
           </Typewriter>
      </h2>
      <p>Discover the perfect plan for your needs! Whether you&apos;re seeking enhanced features, more flexibility, or premium benefits, we have a range of plans designed to cater to your preferences. Explore our options today and elevate your experience with us</p>
     </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto gap-3 mt-16">
      <div className="items-center text-center">
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-x font-medium text-center text-white bg-fuchsia-800 rounded-lg hover:bg-fuchsia-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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


      <div className="w-[300px] mx-auto p-6 text-center h-[400px] rounded-md shadow-md  bg-white dark:bg-gray-900 dark:text-gray-50">
        <div className="mt-20 mb-2">
          <h2 className="text-xl font-bold tracki">for free users</h2>
        </div>
        <p className="dark:text-gray-100 p-2">
        1. Latest News Feed
        </p>
        <hr />
        <p className="dark:text-gray-100 p-2">
        2. Categories & Filters
        </p>
        <hr />
        <p className="dark:text-gray-100 p-2">
        3. Breaking News Notifications
        </p>
        <hr />
        <p className="dark:text-gray-100 p-2">
        4. Save & Bookmark Articles
        </p>
        <hr />
        <button className="btn btn-sm bg-slate-600 mt-2 p-2">Upgrade</button>
      </div>

      {/* 2 */}
      <div className="w-[300px] mx-auto text-center h-[400px] p-6 rounded-md shadow-md bg-white dark:bg-gray-900 dark:text-gray-50">
       
        <div className="mt-20 mb-2">
          <h2 className="text-xl  tracki font-bold">for premium users</h2>
        </div>
        <p className="dark:text-gray-100 p-2">
        1. Ad-Free Experience
        </p>
        <hr />
        <p className="dark:text-gray-100 p-2">
        2. Exclusive Content
        </p>
        <hr />
        <p className="dark:text-gray-100 p-2">
        3. Early Access to Articles
        </p>
        <hr />
        <p className="dark:text-gray-100 p-2">
        4. Customized News Alerts
        </p>
        <hr />
        <button className="btn btn-sm bg-slate-600 mt-2 p-2">Upgrade</button>
      </div>


        {/* 3 */}
  
    </div>
    </div>
  );
};

export default Plans;
