import { google, hide, signIn, twitter } from "../assets/assets"
import { MainContext } from "../context/MainContext"
import { useContext } from 'react'

const LogIn = () => {

    const { navigate } = useContext(MainContext)

    return (

        <div className="flex w-full">
            <img src={signIn} alt="signUp banner" />
            <form className="p-10  w-full">

                <h1 className="text-[#333333] font-[Core Sans C]   text-[34px]">Sign In</h1>
                <p className="hidden text-[#666666] mb-10">Sign up for free to access to in any of our products</p>

                <div className="mb-10">

                    <div className="flex justify-center items-center border border-[#3C4242] rounded-md p-3 gap-2 w-full mb-5 mt-5">
                        <img src={google} alt="google Icon" />
                        <button className="text-[#8A33FD] text-md">Continue With Google</button>

                    </div>

                    <div className="flex justify-center items-center border border-[#3C4242] rounded-md p-3 gap-2 w-full mb-5 mt-5">
                        <img src={twitter} alt="twitter Icon" />
                        <button className="text-[#8A33FD] text-md">Continue With Twitter</button>
                    </div>
                </div>
                <div className="mb-7">
                    <label className="text-[#3C4242]" htmlFor="email">Email Address</label>
                    <div className="flex justify-center items-center border border-[#3C4242] rounded-md p-3 gap-2 w-full mt-2">
                        <input id="email" className="w-full outline-none text=[#807D7E] px-2" placeholder="developer@gmail.com" />
                    </div>
                    <p className="hidden text-[#EE1D52] mt-1 mb-1">Error Message</p>
                </div>
                <div className="mb-7">
                    <div className="flex justify-between items-center">
                        <label className="text-[#3C4242]" htmlFor="password">Password</label>
                        <button className="flex gap-2 w-[80px] h-[22px] px-1">
                            <img src={hide} alt="hide" />
                            <p className="text-[#3C4242]">Hide</p>
                        </button>

                    </div>
                    <div className="flex justify-center items-center border border-[#3C4242] rounded-md p-3 gap-2 w-full mt-2">
                        <input id="password" className="w-full outline-none text-[#807D7E] px-2" placeholder="Enter Your Password" />
                    </div>
                    <div className="flex justify-end">
                        <button className="mt-2 text-[#3C4242] border-b border-[#3C4242]" onClick={() => navigate("/reset-password")}>
                            Forget your password
                        </button>
                    </div>
                </div>


                <div>

                    <button className="bg-[#8a33fD] text-[#FFFFFF] w-[156px] h-[46px] rounded-md outline-none cursor-pointer mt-5 mb-3" onClick={() => navigate("/")}>
                        Sign In
                    </button>
                    <p className="text-[#3C4242]">Don’t have an account? <span className="border-b" onClick={() => navigate("/signup")}> Sign up</span></p>
                </div>

            </form >
        </div >
    )
}



export default LogIn