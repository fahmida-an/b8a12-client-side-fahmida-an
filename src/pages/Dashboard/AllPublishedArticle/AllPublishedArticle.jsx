import { FaTrash } from "react-icons/fa";
import useNews from "../../../hooks/useNews";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast } from "react-hot-toast";

const AllPublishedArticle = () => {
  const [news, refetch] = useNews();
  const axiosPublic = useAxiosPublic();
  console.log(news);

  const handleDelete = (id) => {
    axiosPublic.delete(`/news/${id}`).then((res) => {
      console.log(res);
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success("News has been deleted");
      }
    });
  };

  const handleMakeApproved = (id) => {
    axiosPublic.patch(`/news/approve/${id}`).then((res) => {
      console.log(res);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${news.title} Approved`);
      }
    });
  };
  return (
    <div className="bg-fuchsia-100">
      <div className="flex text-center items-center justify-center font-bold py-10 border-b-2 border rounded-lg ">
        <h2 className="text-3xl">Total Published Article:{news.length}</h2>
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
              <th className="font-bold">Action</th>
              <th className="font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {news?.map((item, index) => (
              <tr key={item._id} className="bg-fuchsia-100">
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.details}</td>
                <td>{item.publisher}</td>
                <td>{item.newstab}</td>
                <td>{item.date}</td>
            
                    <td>
                      {
                        item.status === "approved" ? "APPROVED" :
                     
                      <button onClick={() => handleMakeApproved(item._id)}>
                        Approve
                      </button>
                       }
                    </td>
                
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-sm"
                  >
                    <FaTrash className="text-red-600 bg-fuchsia-200"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPublishedArticle;
