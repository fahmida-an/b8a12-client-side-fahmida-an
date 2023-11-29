import {NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";


const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [click, setClick] = useState(false);
  
  const handleClick = () => {
    setClick(!click);
  };

  const content =
  <>
    
        <div className="h-screen w-52 px-3 py-4 overflow-y-auto bg-fuchsia-100 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to={"adminHome"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">Admin Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"allUsers"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">All Users</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"allpublishedArticle"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">All Published Article</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"allReviews"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">All Reviews</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"addPublisher"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">Add Publisher</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to={"addArticle"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">Add Article</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"mynews"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">My Article</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <NavLink
                to={"/"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/profile"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </NavLink>
            </li>
            
          </ul>
        </div>
      

  </>
  return (

 <>
    
    <div className="flex">
    <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>

      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-fuchsia-100 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to={"adminHome"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">Admin Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"allUsers"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">All Users</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"allpublishedArticle"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">All Published Article</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"addPublisher"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">Add Publisher</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"allReviews"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">All Reviews</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to={"addArticle"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">Add Article</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"mynews"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">My Article</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"rateus"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">Rate us</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <NavLink
                to={"/"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/profile"}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
              </NavLink>
            </li>
           
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="flex-1 p-8 max-w-5xl mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
 </>
  );
};

export default Dashboard;
