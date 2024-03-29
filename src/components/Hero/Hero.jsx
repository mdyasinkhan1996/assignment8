import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <div className="flex items-center bg-gray-200 px-24 py-16 rounded-lg my-12">
            <div className="w-2/3">
                <h2 className="text-6xl font-extrabold mb-12">Books to freshen up your bookshelf</h2>
                <NavLink to="listtedbooks" className="bg-green-500 px-4 py-3 rounded-lg text-white">View The List</NavLink>
            </div>
            <div  className="w-1/3">
                <img src='https://i.ibb.co/ccbWgwg/banarbook.png' />
            </div>
        </div>
    );
};

export default Hero;