import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center text-center  mt-[300px]">
            <div className="w-72 h-[700px]">
                    <h2 className="text-4xl mb-4">404</h2>
                   <Link to={'/'}> <button className="btn bg-fuchsia-900 text-white">Back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;