import { Link, useNavigate } from 'react-router-dom'
import { imageUpload } from '../../api/utils';
import useAuth from '../../hooks/useAuth';
import { SaveUser } from '../../api/auth';
import {toast} from 'react-hot-toast'
import { FaGoogle } from 'react-icons/fa';
const SignUp = () => {

    const {createUser, updateUserProfile} = useAuth()
    const navigate = useNavigate()
    //form submit handler
    const handleSubmit = async event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const image = form.image.files[0]
    
  
      try{
        const imageData = await imageUpload(image)

        const result = await createUser(email, password)
        await updateUserProfile(name, imageData?.data?.display_url)
        console.log(result);
        //save userdata in db
        const dbResponse = await SaveUser(result?.user)
        console.log(dbResponse);
        navigate('/')
        toast.success('SignUp Successful')
  
  
      }catch(err) {
        console.log(err);
        toast.error(err?.message)
      }
  
  
    }
  
    return (
        <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col w-[500px] p-6 rounded-md sm:p-10 bg-fuchsia-100 text-slate-900'>
        <div className='mb-8 text-center bg-slate-900 text-white'>
          <h1 className='my-3 text-4xl font-bold'>SignUp Here</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-lg'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                className='w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-fuchsia-900 bg-gray-200 text-slate-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-lg'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-lg'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Email'
                className='w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-fuchsia-900 bg-gray-200 text-slate-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='........'
                className='w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-fuchsia-900 bg-gray-200 text-slate-900'
              />
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='bg-fuchsia-900 w-full rounded-md py-3 text-white text-lg'
            >
                Sign Up
            </button>
          </div>
        </form>
        <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <p>Continue with Google</p>
          <FaGoogle></FaGoogle>
        </div>
        <p className='px-6 text-lg text-center text-gray-400'>
          Already have an account?
          <Link
            to='/signin'
            className='hover:underline text-fuchsia-950'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
    );
};

export default SignUp;