
import Sidebar from "./slidebar";
import RightSidebar from "./RightSidebar";
import BodyHeader from "./BodyHeader";
import Body from "./Body";
const Homepage = () => {
    return (
        <>


<div className="flex w-full">
  <div className="flex-none w-320 h-11320">
    <Sidebar />
  </div>
  <div className="flex-1 w-530 h-11320">
    <BodyHeader />
    <Body />
  </div>
  <div className="flex-none">
    <Sidebar />
  </div>
</div>





        </>
    )
}
export default Homepage;
