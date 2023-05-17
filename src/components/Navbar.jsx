import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png"
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="ui-container mt-5 absolute top-0 left-0 right-0 z-[100] flex justify-between items-center">
            <img className="h-[40px]" src={logo} alt="logo" />
            <span className="md:hidden text-xl">
                    {
                       toggle ? <GrFormClose onClick={() => setToggle(!toggle)} /> : <HiOutlineMenuAlt2  onClick={() => setToggle(!toggle)} />
                    }
                </span>
            <ul className={`flex items-center duration-200 z-50 flex-col py-5 md:p-0 text-white bg-opacity-80 md:text-black top-14 bg-black md:bg-transparent w-full md:w-auto md:flex-row gap-3 absolute md:static ${toggle ? "left-0" : "-left-full"}`}>
                <li>
                    <NavLink  className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink  className={({ isActive }) => isActive ? "active" : ""} to="/donation">Donation</NavLink>
                </li>
                <li>
                    <NavLink  className={({ isActive }) => isActive ? "active" : ""} to="/">Events</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} >Blog</NavLink>
                </li>
                <li className="mt-5 md:mt-auto">
                    <Link className="px-4 py-2 rounded-md text-white bg-[#3F90FC]" to="/register">register</Link>
                </li>
                <li className="mt-2 md:mt-auto">
                    <Link className="px-4 py-2 rounded-md text-white bg-[#434141]" to="/admin">Admin</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;