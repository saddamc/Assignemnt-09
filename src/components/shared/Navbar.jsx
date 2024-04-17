import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/home.png";
import userProfile from "../../assets/user.png";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li className="bg-rgb(255,81,70)"> <NavLink to="/">Home</NavLink> </li>
        {
            user && <>
                <li className="hide"> <NavLink to="/profile">Update Profile</NavLink> </li>
            </>
        }
        <li> <NavLink to="/about">About</NavLink> </li>
    </>
    return (
        <div className="navbar font-fira  bg-slate-400">
            <div className="navbar max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-bold gap-4 hover:text-[rgb(255,81,70)]">
                            {navLinks}
                        </ul>
                    </div>
                    <button className="flex items-center gap-2">
                        <img className="w-10 h-10 m-0 text-white" src={logo} alt="" />
                        <div className="text-left">
                            <div>
                                <a className="text-2xl font-extrabold">
                                    <span className="text-[#9400D3] ">R</span>
                                    <span className="text-[#4B0082] ">A</span>
                                    <span className="text-[#0000FF] ">I</span>
                                    <span className="text-[#00FF00] ">N</span>
                                    <span className="text-[#FFFF00] ">B</span>
                                    <span className="text-[#FF7F00] ">O</span>
                                    <span className="text-[#FF0000]">W</span>
                                </a>
                            </div>
                            <div className="">
                                <p>Real Estate</p>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-bold gap-4 ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end ">

                    {
                        user ?
                            <Link to="/">
                                <div className="flex items-center">
                                    <span>{user.email} </span>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={userProfile} />
                                        </div>
                                    </div>
                                    <button onClick={handleSignOut} className="login-button p-2 rounded-md text-white font-semibold bg-black text-sm hover:bg-red-500 hover:rounded-md">Sign Out</button>
                                </div>
                            </Link>
                            :
                            <Link to="/login">

                                <button className="login-button p-2 rounded-md text-white font-semibold bg-black text-sm hover:bg-red-500 hover:rounded-md">Login</button>
                            </Link>
                    }

                </div>
            </div>


        </div>
    );
};

export default Navbar;