import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa6';
import { SaveUser } from '../../api/auth';
import { Helmet } from "react-helmet-async";

const Login = () => {
    const {logInUser,  signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/' 

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        try{
          logInUser(email, password)
          navigate(from, {replace: true})
          toast.success('Login Successful')
        }catch(err) {
          console.log(err);
          toast.error(err?.message)
        }
      }

      
    const handleGoogleSignIn = async () => {
      try {
        const result = await signInWithGoogle()
        const dbResponse = await SaveUser(result?.user)
        console.log(dbResponse)
        navigate('/')
        toast.success('Signup Successful')
      } catch (err) {
        console.log(err)
        toast.error(err?.message)
      }
    }

    return (
      <>
       <Helmet>
    <title>NewsChannel || Reviews</title>
  </Helmet>
  
        <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col w-[500px] p-6 rounded-md sm:p-10 bg-fuchsia-100 text-slate-900'>
          <div className='mb-8 text-center bg-slate-900 rounded-md'>
            <h1 className='my-3 text-4xl font-bold text-white'>LogIn Here</h1>
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
                  <label htmlFor='password' className='text-lg mb-2'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  autoComplete='current-password'
                  id='password'
                  required
                  placeholder='..........'
                  className='w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-fuchsia-900 bg-gray-200 text-slate-900'
                />
              </div>
            </div>
  
            <div>
              <button
                type='submit'
                className='bg-fuchsia-900 w-full rounded-md py-3 text-white text-xl'
              >
                Login
              </button>
            </div>
          </form>
          <div className='space-y-2'>
            <button className='text-sm hover:underline  text-slate-700'>
              Forgot password?
            </button>
          </div>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 '></div>
            
            <div className='flex-1 h-px sm:w-16'></div>
          </div>
          <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
            <p>Login with Google</p>
            <FaGoogle></FaGoogle> 
           </div>
          <p className='px-6 text-lg text-center'>
            Don&apos;t have an account?
            <Link
              to='/signup'
              className='hover:underline text-fuchsia-950'
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
      </>
    );
};

export default Login;