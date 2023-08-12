import { Link } from "react-router-dom";
import React from "react";

const Header=()=>{
    return (
        <>
       <nav id="header" className="w-full z-30  py-1 bg-white shadow-lg border-b border-blue-400 mt-12">
       <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
        <img className="w-16 rounded-full bg-blue-900" src="https://www.citypng.com/public/uploads/preview/-11591559271w4pbnmngbc.png" />
         <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
               <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
               <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="/">Home</a></li>
                  <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="/contact">Products</a></li>
                  <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="/about">About</a></li>
               </ul>

            </nav>
            <div className="auth flex items-center w-full md:w-full">
               <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
               <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button>
            </div>
         </div>
         
         {/* <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div className="auth flex items-center w-full md:w-full">
               <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
               <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button>
            </div>
         </div> */}
      </div>
   </nav>
        </>
    );
}
export default Header;