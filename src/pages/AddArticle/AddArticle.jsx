import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import useAxiosPublic from '../../hooks/useAxiosPublic';
const animatedComponents = makeAnimated();
const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddArticle = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const axiosPublic = useAxiosPublic();

    const tabOptions = [
        { value: 'political', label: 'Political' },
        { value: 'travel', label: 'Travel' },
        { value: 'arts', label: 'Arts' },
        { value: 'fashion', label: 'Fashion' },
        { value: 'sports', label: 'Sports' },
        { value: 'space', label: 'Space' },
        
      ];

      const handleAddArticle = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const publisher = form.publisher.value;
        const details = form.details.value;
        const date = form.date.value;
        const imageFile = form.image.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);
        try {
          const res = await axiosPublic.post(image_hosting_api, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          const imageUrl = res.data.data.display_url;
          const newstab = selectedOptions.map((option) => option.value);

          const newNewsArticle = {
            title,
            newstab,
            publisher,
            details,
            image: imageUrl,
            date,
          };
      
          console.log(newNewsArticle);
          const newsRes = await axiosPublic.post('/news', newNewsArticle);
          if(newsRes.data.insertedId){
            form.reset()
            toast.success('Artcle Added')
          }
        }
        
        catch (error) {
          console.error(error);
          toast.error('Article not added!')
        }
      };
      



  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-center py-6 font-bold text-4xl text-fuchsia-900">
        Add a Service
      </h2>
      <form  onSubmit={handleAddArticle} className="bg-fuchsia-100 max-w-4xl mx-auto rounded-lg shadow-xl">
        <div className="flex justify-between items-center px-8 pt-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold">Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
                placeholder="News Title"
                className="input input-bordered text-sm w-full "
                required
              />
            </label>
          </div>

          <div className="form-control w-1/2 ml-2">
            <label className="label">
              <span className="label-text font-bold">Image</span>
            </label>
            <label className="input-group">
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
                placeholder="News Image"
                className="input input-bordered text-sm w-full "
              />
            </label>
          </div>
        </div>


        <div className='flex justify-between items-center px-8'>
        <div className="form-control w-1/2">
       <label className="label">
            <span className="label-text font-bold">News Tabs</span>
          </label>
       <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti={true}
      options={tabOptions}
      defaultValue={[tabOptions[4], tabOptions[5]]}
      placeholder="Select News Tab"
      name="newstab"
      onChange={(options) => setSelectedOptions(options)}
    />
       </div>

       <div className="form-control w-1/2 ml-2">
            <label className="label">
              <span className="label-text font-bold">News Publishers</span>
            </label>
           
            <label className="input-group">
              <select name="publisher" className="select select-bordered w-full ">
                <option disabled selected>
                 News Publishers
                </option>
                <option value="The New York Times">The New York Times</option>
                <option value="The Guardian">The Guardian</option>
                <option value="The Washington Post">The Washington Post</option>
                <option value="The Times (of London)">The Times (of London)</option>
                <option value="Le Monde">Le Monde</option>
                <option value="The Wall Street Journal">The Wall Street Journal</option>
              </select>
            </label>
       
          </div>
        </div>

        <div className="form-control pl-8 w-1/2">
          <label className="label">
            <span className="label-text font-bold">Date</span>
          </label>
          <label className="input-group">
            <input
              type="date"
              name="date"
              className="input input-bordered text-sm w-full"
              required
            />
          </label>
        </div>

        <div className="form-control px-8">
          <label className="label">
            <span className="label-text font-bold">Details</span>
          </label>
          <label className="input-group">
            <textarea
              name="details"
              placeholder="News Details"
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

export default AddArticle;
