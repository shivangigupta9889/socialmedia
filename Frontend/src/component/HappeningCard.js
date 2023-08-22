import React from 'react';


const HappeningCard=()=> {
  return (
      <div
        className="block rounded-2xl bg-gray-100 p-2 ml-2 m-2  mr-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5
          className="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
         What's Happening
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Subscribe to unlock new features and if eligible, receive a share of ads revenue.
        </p>
        
      </div>
  );
}
export default HappeningCard
