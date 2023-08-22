import CardComponent from "./card";
import BodyHeader from "./BodyHeader";
const Body = () => {
  return (
    <>
    <div className="">
      <div className="  top-0  ">
        <BodyHeader />
        <CardComponent name="shivam" />
        <CardComponent name="shivangi" />
        <CardComponent name="harshit" />
      </div>
      </div>
    </>
  );
};
export default Body;
