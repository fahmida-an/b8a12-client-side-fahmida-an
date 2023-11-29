import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
const PublisherCard = ({ news }) => {
  const { title, image, details, newstab, publisher, date } = news;
  console.log(newstab);
  useEffect(() => {
    Aos.init();
  }, []);

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="mt-6">
      <div
        data-aos="fade-up"
        className="sm:w-[350px] md:w-[500px] lg:w-[800px] rounded-md shadow-md dark:bg-gray-900 "
      >
         <div className="flex justify-between font-bold px-6">
            <p>Published by: {publisher}</p>
            <p>Date: {date}</p>
            </div>
        <img
          src={image}
          alt=""
          className="object-cover object-center p-6 w-full rounded-t-md h-60 "
        />
        <div className="flex flex-col justify-between p-6 space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold ">{title}</h2>


        <div>
      {showAll ? (
        <p className="dark:text-gray-100">{details}</p>
      ) : (
        <p className="dark:text-gray-100">
          {details.length > 200 ? `${details.slice(0, 200)}` : details}
        </p>
      )}

      {details.length > 50 && (
        <button
          className="text-sm text-blue-500 cursor-pointer"
          onClick={handleShowAll}
        >
          {showAll ? 'Read Less' : 'Read More..'}
        </button>
      )}
    </div>

            <div>
              {Array.isArray(newstab) && newstab.length > 0
                ? news.newstab.join(", ")
                : "No tabs"}
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherCard;
