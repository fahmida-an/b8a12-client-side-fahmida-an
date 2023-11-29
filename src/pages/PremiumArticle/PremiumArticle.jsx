import { useState } from "react";
import useNews from "../../hooks/useNews";
import Typewriter from "typewriter-effect";
import InfiniteScroll from 'react-infinite-scroller';
import { Helmet } from "react-helmet-async";
const PremiumArticle = () => {
  const [news] = useNews();
  const premiumNews = news.filter((item) => item.article === "Premium");
  console.log(premiumNews);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  const loadFunc = () => {
  };
  return (
    <div className="max-w-screen-xl mx-auto bg-fuchsia-50 " style={{ height: '650px', overflow: 'auto' }}>
       <Helmet>
    <title>NewsChannel || Premium Aritcle</title>
  </Helmet>

      <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={true || false}
          loader={<div className="loader" key={0}>Loading ...</div>}
          useWindow={false}
      >
      <h1 className="pt-10 pb-5 items-center text-center font-bold text-3xl ">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 60,
            strings: "Premium News",
          }}
        ></Typewriter>
      </h1>
      <p className="items-center text-center pb-8">
        In-Depth Insight, Exclusive Content, Ad-Free. Elevate Your News
        Experience with Unmatched Quality and Unrivaled Access.
      </p>
      {premiumNews.map((item) => (
        <div key={item._id} className="w-[800px] mx-auto bg-white">
          <div className="flex justify-between font-bold pt-6 px-6 my-3">
            <p>
              {" "}
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  strings: `Published by: ${item.publisher}`,
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

export default PremiumArticle;
