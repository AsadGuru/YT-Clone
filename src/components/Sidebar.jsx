import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdHelpOutline, MdOutlineFeedback, MdOutlineSubscriptions, MdOutlineSwitchAccount, MdWatchLater } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineFlag, HiOutlineShoppingBag } from "react-icons/hi2";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive, CgPlayList } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { RiVideoLine } from "react-icons/ri";
import { LuThumbsUp } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { useUtils } from "../context/UtilsContext";

function Sidebar() {
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();

  const sidebarItems = [
    {
      groupName: "Home",
      groupItems: [
        {
          id: 1,
          name: "Home",
          icon: <GoHome />,
        },
        {
          id: 2,
          name: "Shorts",
          icon: <SiYoutubeshorts />,
        },
        {
          id: 3,
          name: "Subscription",
          icon: <MdOutlineSubscriptions />,
        },
      ],
    },
    {
      groupName: "You",
      groupItems: [
        {
          id: 1,
          name: "Your channel",
          icon: <MdOutlineSwitchAccount />,
        },
        {
          id: 2,
          name: "History",
          icon: <VscHistory />,
        },
        {
          id: 3,
          name: "Playlists",
          icon: <CgPlayList />,
        },
        {
          id: 4,
          name: "Your videos",
          icon: <RiVideoLine />,
        },
        {
          id: 5,
          name: "Watch Later",
          icon: <MdWatchLater />,
        },
        {
          id: 6,
          name: "Liked Videos",
          icon: <LuThumbsUp />,
        },
      ],
    },
    {
      groupName: "Explore",
      groupItems: [
        {
          id: 1,
          name: "Trending",
          icon: <SiTrendmicro />,
        },
        {
          id: 2,
          name: "Shopping",
          icon: <HiOutlineShoppingBag />,
        },
        {
          id: 3,
          name: "Music",
          icon: <PiMusicNoteLight />,
        },
        {
          id: 4,
          name: "Films",
          icon: <PiFilmSlateLight />,
        },
        {
          id: 5,
          name: "Live",
          icon: <CgMediaLive />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <SiYoutubegaming />,
        },
        {
          id: 7,
          name: "News",
          icon: <FaRegNewspaper />,
        },
        {
          id: 8,
          name: "Sports",
          icon: <TfiCup />,
        },
        {
          id: 9,
          name: "Courses",
          icon: <PiLightbulbLight />,
        },
        {
          id: 10,
          name: "Fashion & Beauty",
          icon: <SiStylelint />,
        },
        {
          id: 11,
          name: "Podcasts",
          icon: <MdPodcasts />,
        },
      ],
    },
    {
      groupName: "More From Youtube",
      groupItems: [
        {
          id: 1,
          name: "YouTube Premium",
          icon: <FaYoutube />,
        },
        {
          id: 2,
          name: "YouTube Studio",
          icon: <SiYoutubestudio />,
        },
        {
          id: 3,
          name: "YouTube Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "YouTube Kids",
          icon: <SiYoutubekids />,
        },
      ],
    },
    {
      groupName: "Help",
      groupItems: [
        {
          id: 1,
          name: "Setting",
          icon: <IoSettingsOutline />,
        },
        {
          id: 2,
          name: "Report History",
          icon: <HiOutlineFlag />,
        },
        {
          id: 3,
          name: "Help",
          icon: <MdHelpOutline />,
        },
        {
          id: 4,
          name: "Send Feedback",
          icon: <MdOutlineFeedback />,
        },
      ],
    },
  ];

  const ModelOverlay = () => {
    return (
      <div
        className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
        onClick={() => setMobileShow(!mobileShow)}
      ></div>
    );
  };

  return (
    <>
      <div
        className={`${
          mobileShow
            ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]"
            : "hidden h-[calc(100vh-6.625rem)] w-[18%]"
        } xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin`}
      >
        {/* Home Menu Items */}
        <div className="items-center space-y-3">
          {sidebarItems.map((group) => {
            return (
              <div className="mb-5">
                <h1 className="font-bold">{group.groupName}</h1>
                {group.groupItems.map((item) => {
                  return (
                    // Added return statement here
                    <div
                      key={item.id} // add key in div to avoid unique key issues
                      className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 my-3"
                    >
                      <div className="text-sm cursor-pointer">{item.icon}</div>
                      <span className="text-sm cursor-pointer">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <br />
        <hr />
        <br />

        {/* Sidebar Footer Section Items */}
        <span className="text-xs font-semibold text-gray-600">
          About&nbsp;&nbsp; Press&nbsp;&nbsp; Copyright <br /> Contact
          us&nbsp;&nbsp;&nbsp;&nbsp; Creators <br />{" "}
          Advertise&nbsp;&nbsp;&nbsp;&nbsp; Developers <br />
          <br />
          <p>
            Terms&nbsp;&nbsp; Privacy&nbsp;&nbsp; Policy & Safety <br /> How
            YouTube Works <br /> Test new features
          </p>
        </span>
        <br />
        <p className="text-xs text-gray-800 mt-1">
          ©&nbsp;&nbsp; 2024&nbsp;&nbsp;Devil&nbsp;_&nbsp;King
        </p>
      </div>

      {mobileShow ? <ModelOverlay /> : null}
    </>
  );
}

export default Sidebar;
