import useTestimonial from "../../hooks/useTestimonial";

const AllReviews = () => {
  const [testimonial]=useTestimonial()
 

  return (
    <div className="bg-fuchsia-100">
      <div className="flex text-center items-center justify-center font-bold py-10 border-b-2 border rounded-lg ">
        <h2 className="text-3xl">Total Reviews:{testimonial.length}</h2>
      </div>

      <div className="overflow-x-auto overflow-y-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className="font-bold">Name</th>
              <th className="font-bold">Details</th>
              <th className="font-bold">Rating</th>
              
            </tr>
          </thead>
          <tbody>
            {testimonial?.map((item, index) => (
              <tr key={item._id} className="bg-fuchsia-100">
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.details}</td>
                <td>{item.rating}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReviews;
