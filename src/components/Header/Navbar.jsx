import { Link, NavLink } from "react-router-dom";
import userIcon from '../../assets/icons/user.png'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="flex gap-3 text-base-200 justify-center">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
            <div className="flex items-center gap-4">
                <Link to='/profile'>
                <img className="h-7 w-7" src={userIcon}/>
                </Link>
                <Link to='/login'>
                <button className="bg-[#403F3F] text-white px-5 py-1 text-sm cursor-pointer">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;