
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import BodyHeader from "./BodyHeader";
import Body from "./Body";
const Homepage = () => {
    return (
        <>


{/* <div className="flex w-full">
  <div className="flex-none w-430 h-11320">
    <Sidebar />
  </div>
  <div className="flex-1 w-530 h-11320">
    <BodyHeader />
    <Body />
  </div>
  <div className="flex-none">
    <Sidebar />
  </div>
</div> */}

<div className="flex flex-row  ">
  <div className="basis-1/4">
    <Sidebar />
  </div>
  <div className="basis-2/4">
   
    <Body />
  </div>
  <div className="basis-1/4">
    <RightSidebar />
  </div>
</div>





        </>
    )
}
export default Homepage;
