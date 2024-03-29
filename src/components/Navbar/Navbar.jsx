import { Link, NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Header = () => {
    const location = useLocation();
    const navlink = <>
        <li><NavLink to="/" className={location.pathname==="/" && "btn btn-sm btn-outline text-green-500"}>Home</NavLink></li>
        <li><NavLink to="listtedbooks" className={location.pathname==="/listtedbooks" && "btn btn-sm btn-outline text-green-500"}>Listed Books</NavLink></li>
        <li><NavLink to="pagestoread" className={location.pathname==="/pagestoread" && "btn btn-sm btn-outline text-green-500"}>Pages to Read</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        
                        {
                            navlink
                        }
                    </ul>
                </div>
                <Link to="/" className="font-bold text-2xl">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlink
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-sm bg-green-500 text-white">Sign In</a>
                <a className="btn btn-sm bg-blue-300 text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;