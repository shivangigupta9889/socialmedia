import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/xx2.png";
import communityPic from "../Assets/community.png";
import notificationPic from "../Assets/notification2.png";
import explorePic from "../Assets/explore.png";
import VerifiedPic from "../Assets/verified.png";
import profilePic from "../Assets/profile.png";
import morePic from "../Assets/more.png";
import messagePic from "../Assets/message2.png";
import homePic from "../Assets/home.png";

export default function Sidebar() {
  return (
    <div className="flex h-screen sticky top-0 ">
      <div className="flex flex-col  p-2 m-2 ml-10  bg-white shadow ">
        <div className="space-y-3">
          <div className="flex items-center pl-4 ">
            {" "}
            <button>
              <img className="w-10 rounded-full hover:bg-gray-200" src={img} />
              {/* <h2 className="text-xl font-bold">Dashboard</h2> */}
            </button>
          </div>
          <div className="flex-1">
            <ul className=" py-4 pl-4 space-y-3 text-2xl ">
              <li className="rounded-full ">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-full hover:bg-gray-200"
                >
                  <img className="w-8" src={homePic} />
                  <span>Home</span>
                </a>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/main"
                  className="flex items-center p-2 space-x-3  rounded-full hover:bg-gray-200"
                >
                  <img className="w-8" src={explorePic} />
                  <span>Explore</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3  rounded-full hover:bg-gray-200"
                >
                  <img className="w-8 " src={notificationPic} />
                  <span>Notifications</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-full hover:bg-gray-200"
                >
                  <img className="w-8" src={messagePic} />
                  <span>Message</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3  rounded-full hover:bg-gray-200"
                >
                  <img className="w-6" src={img} />
                  <span>Lists</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3  rounded-full hover:bg-gray-200"
                >
                  <img className="w-6" src={communityPic} />
                  <span>Communities</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-full hover:bg-gray-200"
                >
                  <img className="w-8" src={VerifiedPic} />
                  <span>Verified</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3  rounded-full hover:bg-gray-200"
                >
                  <img className="w-6" src={profilePic} />
                  <span>Profile</span>
                </a>
              </li>
              <li className="rounded-full ">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3  rounded-full hover:bg-gray-200"
                >
                  <img className="w-6" src={morePic} />
                  <span>More</span>
                </a>
              </li>
              <button className="bg-blue-500 p-2 text-white w-full rounded-full">
                Post
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
