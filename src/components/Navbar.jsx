import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";

import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { FaBell, FaSearch } from "react-icons/fa";

import logo from "/logo.png";
import profile from "/profile.png";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";
import { IoArrowBackSharp } from "react-icons/io5";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
  const [searchbar, setSearchbar] = useState(false);

  useEffect(() => {
    console.log(isSidebar, mobileShow);
  }, [isSidebar, mobileShow]);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    } else {
      setIsSidebar(!isSidebar);
    }
  };

  if (searchbar) {
    return (
      <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 items-center">
        <IoArrowBackSharp size={20} className="cursor-pointer" onClick={() => setSearchbar(!searchbar)} />
        <div className="flex flex-grow items-center mx-4 ">
          <div className="w-[100%]  px-5 py-2 border border-gray-400 rounded-l-full">
            <input
              type="text"
              placeholder="Search on Youtube..."
              className="outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            className="px-3 py-2 border border-gray-400 bg-gray-200 rounded-r-full hover:bg-gray-300 duration-200"
            onClick={(e) => searchQueryHandler("searchButton")}
          >
            <CiSearch size={"24px"} />
          </button>
        </div>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-400 rounded-3xl p-2 cursor-pointer bg-slate-300  hover:bg-gray-400 duration-200"
        />
      </div>
    );
  }

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="flex items-center space-x-6 cursor-pointer ">
        <AiOutlineMenu
          className="text-xl cursor-pointer hover:bg-gray-300 rounded-full"
          onClick={handleSidebar}
        />
        <img src={logo} alt="Logo" className="w-28 cursor-pointer" />
      </div>
      <div className="hidden md:sm:flex w-[35%] items-center ">
        <div className="w-[100%]  px-5 py-2 border border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search on Youtube..."
            className="outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-3 py-2 border border-gray-400 bg-gray-200 rounded-r-full hover:bg-gray-300 duration-200"
          onClick={(e) => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-400 rounded-3xl p-2 cursor-pointer bg-slate-300  hover:bg-gray-400 duration-200"
        />
      </div>
      <div className="flex space-x-5 items-center">
        <FaSearch
          className="text-2xl cursor-pointer xl:hidden"
          onClick={() => setSearchbar(!searchbar)}
        />
        <RiVideoAddFill className="text-2xl" />
        <FaBell className="text-2xl" />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
  );
}

export default Navbar;
