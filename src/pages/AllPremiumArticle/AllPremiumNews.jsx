import useNews from "../../hooks/useNews"
import { Helmet } from "react-helmet-async";

const AllPremiumNews = () => {
    const [news] = useNews();
 
    const premiumNews = news.filter((item) => item.article === "Premium");
    console.log(premiumNews);
    return (
    <div>
        <Helmet>
      <title>NewsChannel || All Premium Article</title>
    </Helmet>
    <div className="flex text-center items-center justify-center font-bold py-10 border-b-2 border rounded-lg ">
        <h2 className="text-3xl">Total premium Article:{premiumNews.length}</h2>
      </div>

      <div className="overflow-x-auto overflow-y-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className="font-bold">Title</th>
              <th className="font-bold">Details</th>
              <th className="font-bold">Publisher</th>
              <th className="font-bold">Tab</th>
              <th className="font-bold">Date</th>
            </tr>
          </thead>
          <tbody>
            {premiumNews?.map((item, index) => (
              <tr key={item._id} className="bg-fuchsia-100">
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.details}</td>
                <td>{item.publisher}</td>
                <td>{item.newstab}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        
    </div>
    );
};

export default AllPremiumNews;