import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
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
                    to={"statistics"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 rounded-lg bg-fuchsia-900 text-white  group"
                        : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group"
                    }
                  >
                    <span className="ms-3">Statistics</span>
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
            <li>
              <NavLink className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-fuchsia-900 hover:text-white dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">LogOut</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      {/* dashboard content  */}
      <div className="flex-1 p-8 max-w-5xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
