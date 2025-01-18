import React from "react";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";

function SuggestedVideo({ video }) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex mb-3">
          {/* thumbnail & duration design */}
          <div className="relative h-24 md:h-20 xl:h-24 w-48 min-w-[198px] lg:w-40 lg:min-w-[158px] xl:w-[168px] md: rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full rounded-lg"
              src={video?.thumbnails[0]?.url}
              alt={video?.title}
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>

          {/* channel logo & title */}
          <div className="flex space-x-3 mt-3">
            <div className="flex items-start">
              {/* <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.author?.avatar[0].url}
                  alt="ChannelLogo"
                />
              </div> */}
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-1">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {/* {video?.author?.title} */}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-blue-600 ml-1 text=[12px]" />
                )}
              </span>
              <div className="flex text-gray-500 text-[12px]">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex text-[25px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SuggestedVideo;