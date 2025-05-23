import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5  top-0 z-20 bg-[#050816]`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <p className="">Deepak Kumar</p>
        </Link>

{/* Desktop nav */}
        <div className="sm:flex hidden items-center gap-10">
        <ul className="sm:flex hidden flex-row list-none gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-[#aaa6c3]"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

         {/* Download Button */}
          <a
            href="" // Update this to your actual file path
            download
            className="ml-4 px-4 py-2 bg-[#915eff] text-white rounded-md hover:bg-[#7a4bff] transition"
          >
            Download
          </a>
        </div>


          {/* Mobile nav */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className=" flex justify-end flex-col item-start gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-[#aaa6c3]"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {setToggle(!toggle); setActive(nav.title);}}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

           <li>
                <a
                  href="/Deepak-Kumar-Resume.pdf"
                  download
                  className="text-white px-3 py-1 bg-[#915eff] rounded-md hover:bg-[#7a4bff]"
                >
                  Download
                </a>
              </li>
          
        </ul>
        <Link to="">Download</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
