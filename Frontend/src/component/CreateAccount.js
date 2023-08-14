import React from "react";
const CreateAccount = () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>

            <button className="bg-blue-500 text-white place-self-center font-bold mt-2 px-14 py-2 border border-gray-200 rounded-full" type="button"
                onClick={() => setShowModal(true)}
            >
                Create Account
            </button>
            {showModal ? (
                <>
                    <div className="w-9/12">
                        <div className="justify-center items-center flex h-5/8  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="absolute my-6 mx-auto w-5/12  rounded-full">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg   relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div> */}
                                    {/*body*/}
                                    <div className="flex items-center justify-start p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            X
                                        </button>
                                    </div>

                                    <div className="relative flex flex-col justify-center  overflow-hidden ">
                                        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                                            <h1 className="text-5xl font-semibold text-center text-black-700 text-bold ">
                                                Create your account
                                            </h1>
                                            <form className="mt-6">
                                                <div className="mt-10">
                                                <input
                                                    type="text" placeholder="Name" name="name" id="name" 
                                                    className="block w-full px-4 py-2 my-6 text-xl bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                />
                                                <input
                                                    type="text|email" placeholder="Mobile No/email" name="text|email" 
                                                    className="block w-full px-4 py-2 my-6 bg-white text-xl border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                />
                                                
                                                <input
                                                
                                                    type="text" placeholder="UserName" name="username" id="username"
                                                    className="block w-full px-4 py-2 my-6 text-xl bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                />
                                                <input
                                                    type="password" id="password" name="password"placeholder="password"
                                                    className="block w-full px-4 py-2 mt-6 bg-white text-xl border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                />
                                                </div>
                                                <h1 className="font-bold">Date of Birth</h1>
                                                <p className="text-s">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                                                <div className="mt-6">
                          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 font-bold transform bg-black rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-500">
                            Submit
                          </button>
                        </div>
                                            </form>

                                            <p className="mt-8 text-xs font-light text-center text-gray-700">
                                                {" "}
                                                Don't have an account?{" "}
                                                <a
                                                    href="#"
                                                    className="font-medium text-purple-600 hover:underline"
                                                >
                                                    Sign up
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </div>
                </>
            ) : null}


        </>
    )
}
export default CreateAccount;