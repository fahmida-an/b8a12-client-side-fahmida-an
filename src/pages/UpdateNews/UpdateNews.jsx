import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useContext, useEffect, useState } from "react";
import useNews from "../../hooks/useNews";
import { useParams } from "react-router-dom";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { AuthContext } from '../../Provider/AuthProvider';
const animatedComponents = makeAnimated();
const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
import {toast} from "react-hot-toast"
const UpdateNews = () => {
    const axiosPublic = useAxiosPublic()
    const [newsCard, setNewsCard] = useState({});
    const {user} = useContext(AuthContext)
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [news] = useNews();
    const {id} = useParams()
    useEffect(() => {
        const newsDetail = news.find(item => item._id === id)
        if(newsDetail){
            setNewsCard(newsDetail)
        } else{
            console.log(console.error);
        }
    }, [id, news])

    const tabOptions = [
        { value: 'political', label: 'Political' },
        { value: 'travel', label: 'Travel' },
        { value: 'arts', label: 'Arts' },
        { value: 'fashion', label: 'Fashion' },
        { value: 'sports', label: 'Sports' },
        { value: 'space', label: 'Space' },
        
      ];

      const handleUpdateArticle = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const publisher = form.publisher.value;
        const details = form.details.value;
        const date = form.date.value;
        const article = form.article.value;
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

          const updateArticle = {
            title,
            newstab,
            publisher,
            details,
            image: imageUrl,
            date,
            article,
            email: user.email
          };
      
          console.log(updateArticle);
          const newsRes = await axiosPublic.put(`/news/${id}`, updateArticle);
          if (newsRes.modifiedCount > 0) {
            form.reset();
            console.log('Form Reset');
            toast.success('Article Updated');
          } else {
            console.log(' updated:', newsRes);
            toast.success('Updated!');
          }
        } catch (error) {
          console.error('Error updating article:', error);
          toast.error('Article not Updated!');
        }
      };
    return (
        <div className="max-w-4xl mx-auto">
        <h2 className="text-center py-6 font-bold text-4xl text-fuchsia-900">
          Update News
        </h2>
        <form onSubmit={handleUpdateArticle} className="bg-fuchsia-100 max-w-4xl mx-auto rounded-lg shadow-xl">
       
            <div className="form-control px-8 w-full pt-8">
              <label className="label">
                <span className="label-text font-bold">Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  placeholder="News Title"
                  defaultValue={newsCard.title}
                  className="input input-bordered text-sm w-full "
                  required
                />
              </label>
            </div>
         
  
       <div className='flex'>
       <div className='form-control w-32 h-32 ml-8 mt-8'>
              <img src={newsCard.image} alt="" />
              </div>
  

            <div className="form-control w-full px-8 mt-2">
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
                <span className="label-text font-bold">Tab</span>
              </label>
         <Select
          defaultInputValue={newsCard.newstab}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti={true}
        options={tabOptions}
        placeholder="Select News Tab"
        className='text-sm'
        name="newstab"
        onChange={(options) => setSelectedOptions(options)}
      />
         </div>
  
         <div className="form-control w-1/2 ml-2">
              <label className="label">
                <span className="label-text font-bold">News Publishers</span>
              </label>
             
              <label className="input-group">
                <select name="publisher" className="select select-bordered w-full" defaultValue={newsCard.publisher}>
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

       <div className='flex justify-between items-center px-8'>
       <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold">Articles</span>
            </label>
           
            <label className="input-group">
              <select name="article" className="select select-bordered w-full ">
                <option disabled selected>
                Select
                </option>
                <option value="The New York Times">Premium</option>
                <option value="The Guardian">normal</option>
              </select>
            </label>
       
          </div>
  
          <div className="form-control pl-8 w-1/2">
            <label className="label">
              <span className="label-text font-bold">Date</span>
            </label>
            <label className="input-group">
              <input
              defaultValue={newsCard.date}
                type="date"
                name="date"
                className="input input-bordered text-sm w-full"
                required
              />
            </label>
          </div>
       </div>
  
          <div className="form-control px-8">
            <label className="label">
              <span className="label-text font-bold">Details</span>
            </label>
            <label className="input-group">
              <textarea
              defaultValue={newsCard.details}
                name="details"
                placeholder="News Details"
                className="input input-bordered text-sm w-full"
                required
              />
            </label>
          </div>

         
          <div className="py-4 px-8 flex items-center justify-center">
            <input type="submit" value="Update Article" className="w-1/2 tems-center text-white bg-fuchsia-900 px-5 py-2.5 text-center rounded-lg"  />
  
  
            </div>
          
        </form>
      </div>
    );
};

export default UpdateNews;