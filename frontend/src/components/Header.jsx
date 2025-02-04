import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = ()=>{
    setShowMenu(!showMenu)
  }
  return (
    <header className=" bg-gray-900 text-white py-6">
      <nav className="flex justify-between items-center w-[90%] mx-auto">
        <div>
          <Link to="/">LOGO</Link>
        </div>
        <div className={`absolute md:static h-[90vh] md:h-auto top-[10vh] start-0 bg-gray-800 md:bg-gray-900 w-[100%] ${showMenu ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row align-center justify-center gap-10 p-5">
            <li>
              <a className="hover:underline" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#why-us">
                Whay us
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 items-center">
          <button className=" py-2 px-3 underline text-nowrap">
          <Link to="login">Sign in</Link>
          </button>
          <button className="bg-white text-gray-900 py-2 px-3 border border-white hover:bg-gray-900 hover:text-white  text-nowrap">
            <Link to="register">Sign Up</Link>
          </button>
          <FaBars onClick={handleMenu} className={`md:hidden text-3xl ${showMenu ? 'hidden' : 'block'}`} />
          <IoMdClose onClick={handleMenu} className={`md:hidden text-3xl ${showMenu ? 'block' : 'hidden'}`} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
