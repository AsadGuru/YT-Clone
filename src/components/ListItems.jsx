import React from "react";
import { BiCategory } from "react-icons/bi";

function ListItems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer Programming",
    "Reverberation",
    "Movie Musicals",
    "India National Cricket Team",
    "News",
    "Mixes",
    "1990s",
    "Telugu Cinema",
    "Live",
    "Drama",
    "Dubbing",
    "Indian Soap Opera",
    "Cricker",
    "Football",
    "D-Coder",
  ];
  return (
    <div className="flex overflow-x-scroll px-4 hide-scroll-bar scrollbar-none">
      <div className="flex space-x-4 flex-nowrap">
        {categories.map(category => {
            return (
                <div key={category} className="mb-4 flex-none  cursor-pointer bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 ">
                    {category}
                </div>
            );
        })}
      </div>
    </div>
  );
}

export default ListItems;
