import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
// import { BiUpArrow, BiDownArrow} from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import usePremiumUser from "../../../hooks/usePremiumUser";

const Nav = () => {
  const [click, setClick] = useState(false);
  // const [onDash, setOnDash] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isPremium] = usePremiumUser()
  console.log(isPremium);

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

              <Link>
                <img className="w-20 h-20" src={user?.photoURL} alt="" />
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
            <ul className="flex gap-5 text-sm">
              <Link to={"/"}>
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
                  Home
                </li>
              </Link>
              <Link to={"/allArticle"}>
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
                  See Article
                </li>
              </Link>

              {user ? (
                <>
                  {/* <li  onClick={() => setOnDash(!onDash)}>
            

                  
            <div className="flex items-center justify-center hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer ">
            <span className="mr-1">Article</span>
            {onDash ? <BiUpArrow /> :  <BiDownArrow/> }
            </div>
            {onDash && (
            <div className="mt-10 transition absolute border shadow-xl w-52 text-center justify-center h-[100px] z-50 bg-fuchsia-100 rounded-b-xl">
              
              <li className="mb-2 p-2 hover:bg-fuchsia-200">
                <Link to={"/myArticle"} className=" text-fuchsia-900">
                  My Article
                </Link>
              </li>
              <li className=" p-2 hover:bg-fuchsia-200">
                <Link to={"/addArticle"} className="text-fuchsia-900">
                 Add Article
                </Link>
              </li>
            </div>
          )}
          </li> */}

                  {user && isAdmin && (
                    <Link to={"/dashboard/adminHome"}>
                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                       Dashboard
                    </li>
                    </Link>
                  )}
                  {user && !isAdmin && (
                    <Link to={"/dashboard/userHome"}>
                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                     Dashboard
                    </li>
                    </Link>
                  )}

                  {
                    user && isPremium && (
                      <Link to={"/premiumArticle"}>
                      <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                       Premium Article
                      </li>
                      </Link>
                    )
                  }

{
                    user && !isPremium && (
                      <Link to={"/premium"}>
                      <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                      Subscription
                      </li>
                      </Link>
                    )
                  }

                  <Link>
                    <li
                      onClick={handleLogOut}
                      className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer "
                    >
                      log Out
                    </li>
                  </Link>

                  <Link to={"/profile"}>
                    <li>
                      <img
                        className="w-10 h-10 rounded-full border border-fuchsia-500"
                        src={user.photoURL}
                        alt=""
                      />
                    </li>
                  </Link>
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
