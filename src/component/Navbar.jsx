import React from "react";
import { Link } from "react-router-dom";
import plomb from "../assets/plomb.png";
import { NavUtils } from "./NavUtils";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b-2 border-b-[#00ACE3] bg-[#313131] text-white">
      <div className="ml-12">
        <img src={plomb} alt="plomb-logo" className="hover:w-40 hover:h-10" />
      </div>
      <div className="text-md space-x-4 font-bold">
        {NavUtils.map((item, index) => {
          return (
            <Link to={item.url} key={index} className="hover:underline">
              {item.name}
            </Link>
          );
        })}
      </div>

      <button className="bg-[#00ACE3] md:px-4 md:py-2 rounded-md font-semibold md:mr-12">
        connect button
      </button>
    </nav>
  );
}

export default Navbar;
