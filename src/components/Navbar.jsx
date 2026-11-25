import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";
import LogoutButton from "./LogoutButton";

function Navbar() {
  return (
    <nav className="navbar bg-base-100 sticky top-0 z-50 border-b border-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 border border-base-300"
          >
            <li>
              <Link to="/playground" className="text-base h-10 pt-2">
                Playground
              </Link>
            </li>
            <li>
              <Link to="/create" className="text-base h-10 pt-2">
                Create
              </Link>
            </li>
            <li>
              <Link to="/read" className="text-base h-10 pt-2">
                Read
              </Link>
            </li>
            <li>
              <Link to="/update" className="text-base h-10 pt-2">
                Update
              </Link>
            </li>
            <li>
              <Link to="/delete" className="text-base h-10 pt-2">
                Delete
              </Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl p-0 lg:p-5">Supabase API</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/playground" className="text-base pt-2">
              Playground
            </Link>
          </li>
          <li>
            <Link to="/create" className="text-base pt-2">
              Create
            </Link>
          </li>
          <li>
            <Link to="/read" className="text-base pt-2">
              Read
            </Link>
          </li>
          <li>
            <Link to="/update" className="text-base pt-2">
              Update
            </Link>
          </li>
          <li>
            <Link to="/delete" className="text-base pt-2">
              Delete
            </Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
