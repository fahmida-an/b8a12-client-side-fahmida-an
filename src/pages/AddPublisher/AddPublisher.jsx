import useAxiosPublic from "../../hooks/useAxiosPublic";
import {toast} from "react-hot-toast"

const AddPublisher = () => {
    const axiosPublic = useAxiosPublic();

    const handleAddPublisher = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
          const publisherName = {
            name, 
            description
          };
      
          console.log(publisherName);
         const res = await axiosPublic.post('/publisher', publisherName);
         if(res.data.insertedId) {
                toast.success(' data Added')
         }
        
        
    }
        
    return (
        <div className="max-w-4xl mx-auto">
      <h2 className="text-center py-6 font-bold text-4xl text-fuchsia-900">
        Add Publisher
      </h2>
      <form onSubmit={handleAddPublisher} className="bg-fuchsia-100 w-[700px] mx-auto rounded-lg shadow-xl">
          <div className="form-control w-full px-8 pt-8">
            <label className="label">
              <span className="label-text font-bold"> Publisher Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Publisher Name"
                className="input input-bordered text-sm w-full "
                required
              />
            </label>
          </div>

        <div className="form-control px-8">
          <label className="label">
            <span className="label-text font-bold">Description</span>
          </label>
          <label className="input-group">
            <textarea
              name="description"
              placeholder="Deacription"
              className="input input-bordered text-sm w-full"
              required
            />
          </label>
        </div>

        <div className="py-4 px-8 flex items-center justify-center">
          <input type="submit" value="Add Article" className="w-1/2 tems-center text-white bg-fuchsia-900 px-5 py-2.5 text-center rounded-lg"  />


          </div>

        
      </form>
    </div>
    );
};

export default AddPublisher;