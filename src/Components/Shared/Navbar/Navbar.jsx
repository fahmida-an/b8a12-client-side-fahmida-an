import moment from 'moment';
import Nav from './Nav';
const Navbar = () => {
    return (
        <>
            <div className='justify-center items-center text-center h-[100px] mt-6'>
                <h2 className='text-4xl text-gray-600'>NewsTravel</h2>
                <p className='mt-1'>Date:{moment().format('MMMM Do YYYY, h:mm:ss a')} </p>
            </div>
            <div className='bg-slate-900'>
            <Nav></Nav>
            </div>
        </>
    );
};

export default Navbar;