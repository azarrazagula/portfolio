import { useState } from "react";
import { Link } from "react-router-dom";
import Azar from "../../../Assets/Azar.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    console.log(toggleMenu);
  };
  const NavbarClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex flex-col">
      <nav className="flex justify-between lg:justify-around items-center p-4 bg-[#006361]">
        <img className="w-12 h-12" src={Azar} alt="LOGO" />
        <button
          onClick={toggleMenu}
          className="lg:hidden text-3xl text-white z-30"
        >
          {isOpen ? "✖" : "☰"}
        </button>
        <ul
          className={`lg:flex gap-12 list-none text-white z-20 ${
            isOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-[#006361] p-4 h-full items-center"
              : "hidden"
          } `}
        >
          <li className="text-6xl py-4 font-bold  ">
            <Link to="/" onClick={NavbarClose}>
              Portfolio
            </Link>
          </li>
          <li className="text-6xl py-4 font-bold  ">
            <Link to="/about" onClick={NavbarClose}>
              About
            </Link>
          </li>
          <li className="text-6xl py-4 font-bold  ">
            <Link to="/contact" onClick={NavbarClose}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
