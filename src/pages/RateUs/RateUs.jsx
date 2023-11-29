import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-hot-toast";
const RateUs = () => {
  const axiosPublic = useAxiosPublic();
  const [rating, setRating] = useState(0);


  const handleAddReviews = async (event) => {
    event.preventDefault();


    const form = event.target;
    const name = form.name.value;
    const details = form.details.value;

    const reviews = {
      name,
      rating,
      details,
    };

    console.log(reviews);
    const res = await axiosPublic.post("/testimonial", reviews);
    if (res.data.insertedId) {
        form.reset();
      toast.success("Thanks for your feedback!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-center py-6 font-bold text-4xl text-fuchsia-900">
        Add Publisher
      </h2>
      <form
        onSubmit={handleAddReviews}
        className="bg-fuchsia-100 w-[700px] mx-auto rounded-lg shadow-xl"
      >
        <div className="form-control w-full px-8 pt-8">
          <label className="label">
            <span className="label-text font-bold"> Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered text-sm w-full "
              required
            />
          </label>
        </div>
        <div className="form-control w-full px-8 pt-8">
          <div style={{ maxWidth: 180, width: "100%" }}>
            <Rating name="rating" value={rating} onChange={setRating} />
            <button className="btn btn-sm" onClick={() => setRating(0)}>
              Reset
            </button>
          </div>
        </div>

        <div className="form-control px-8">
          <label className="label">
            <span className="label-text font-bold">Details</span>
          </label>
          <label className="input-group">
            <textarea
              name="details"
              placeholder="Details"
              className="input input-bordered text-sm w-full"
              required
            />
          </label>
        </div>

        <div className="py-4 px-8 flex items-center justify-center">
          <input
            type="submit"
            value="Add Article"
            className="w-1/2 tems-center text-white bg-fuchsia-900 px-5 py-2.5 text-center rounded-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default RateUs;
