
import img from "../Assets/xx2.png"
import SignIn from "./signInModal";


const JoinPage = () => {
  return (
    <>
      <div className="flex justify-between m-4 p-2 overflow-hidden ">
        <div className="w-7/12">
          <img  className="w-8/12 ml-10 "
            src={img}  />
        </div>
        <div className="w-5/12">
          <div className=" mt-28 text-7xl font-bold">
            <p>Happening now</p>
          </div>
          <div className="text-4xl font-bold ml-2 mt-16">
            <p>Join today.</p>
          </div>
            
          <button className="bg-white  mt-12 place-self-center px-14 py-2 block border border-gray-200 rounded-full ">
            Sign up with Google
          </button>
          
          <button className="bg-white mt-2 place-self-center px-14 py-2 block border border-gray-200 rounded-full ">
            Sign up with Apple
          </button >
          <p className="mx-[140]">or</p>
          <button className="bg-blue-500 text-white place-self-center font-bold mt-2 px-14 py-2 border border-gray-200 rounded-full">
            Create Account
          </button>
          <div className="text-s">
          <p>
            By signing up,you agree to the{" "}
            <span className="text-blue-500">Terms of Services</span> and{" "}
            <span className="text-blue-500">Policy</span>
          </p>
          <p>
            <span className="text-blue-500">Policy</span> including
            <span className="text-blue-500">Cookie Use</span>
          </p>
          </div>

          <p className="text-lg font-bold mt-16" >Already have an Account?</p>
            
          {/* <button  className="bg-white mt-8 px-14 py-2 place-self-center border border-gray-200 rounded-full">
            Sign in
          </button> */}
          
          
        </div>
      </div>
    </>
  );
};
export default JoinPage;
