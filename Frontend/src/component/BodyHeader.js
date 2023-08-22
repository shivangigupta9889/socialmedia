const BodyHeader = () => {
  return (
    <>
      
      <nav className="flex  flex-col sticky top-0 z-50 bg-black-200 ">
        <div>
        <a href="/">
          <span className=" font-bold text-2xl  ml-2 my-16 py-10">
            Home
          </span>
        </a>
        </div>
        <div className="flex flex-row justify-between m-8">
            <div className="w-1/2 items-center"><button className="text-gray-500 items-center  font-xl  ">For you</button></div>
            <div><button className="text-gray-500 items-center  ">Following</button></div>
        </div>
      </nav>
   
    </>
  );
};
export default BodyHeader;
