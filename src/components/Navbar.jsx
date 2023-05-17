import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png"

const Navbar = () => {
    return (
        <nav className="ui-container mt-5 absolute top-0 left-0 right-0 z-[100] flex justify-between items-center">
            <img className="h-[40px]" src={logo} alt="logo" />
            <ul className="leading-auto flex items-center gap-5">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/donation">Donation</NavLink>
                </li>
                <li>
                    <NavLink to="/">Events</NavLink>
                </li>
                <li>
                    <NavLink>Blog</NavLink>
                </li>
                <li>
                    <Link className="px-4 py-2 rounded-md text-white bg-[#3F90FC]" to="/register">register</Link>
                </li>
                <li>
                    <Link className="px-4 py-2 rounded-md text-white bg-[#434141]" to="/admin">Admin</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;