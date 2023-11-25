import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { AuthContext } from "../../../Provider/AuthProvider";

const Nav = () => {
  const [click, setClick] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleClick = () => {
    setClick(!click);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition z-10">
        <ul className="text-center text-xl p-20">
          <Link to={"/"}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>
          <Link to={"/allArticle"}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              All Article
            </li>
          </Link>

          {user ? (
            <>
              <Link to={"/myArticle"}>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  My Article
                </li>
              </Link>
              <Link to={"/premium"}>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Premium Member
                </li>
              </Link>

              <Link>
                <li
                  onClick={handleLogOut}
                  className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"
                >
                  Log Out
                </li>
              </Link>
            </>
          ) : (
            <Link to={"/signup"}>
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                Sign Up
              </li>
            </Link>
          )}
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">TravelNews</span>
        </div>

        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-1">
            <ul className="flex gap-5 text-md">
              <Link to={"/"}>
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
                  Home
                </li>
              </Link>
              <Link to={"/allArticle"}>
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
                  All Article
                </li>
              </Link>
              
          
              {user ? (
            

              <>
              <Link to={"/myArticle"}>
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
                  My Article
                </li>
              </Link>
              <Link to={"/premium"}>
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
                  Premium Member
                </li>
                </Link>

                  <li
                    onClick={handleLogOut}
                    className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer "
                  >
                    log Out
                  </li>
                
              </>
              ) : (
                <Link to={"/signup"}>
                  <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
                    Sign Up
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>

        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
