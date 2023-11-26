import {useParams} from "react-router-dom"
import useNews from "../../hooks/useNews";
import { useEffect, useState } from "react";
const NewsDetails = () => {
    const [newsd, setNews] = useState(null)
  const publisher = useNews();
  const {id} = useParams();
  console.log(publisher,id);
  useEffect(() => {
    const newsDetail = publisher.find(news => news._id === id);

    if (newsDetail) {
      setNews(newsDetail);
    } else {
      console.log(console.error);
    }
  }, [id, publisher]);
  


    return (
        <div>
            <h2>details</h2>
            <h2>{newsd.title}</h2>
        </div>
    );
};

export default NewsDetails;