import { google, hide, signUpImage, twitter } from "../assets/assets"



const SignUp = () => {


    return (

        <div className="flex w-full">
            <img src={signUpImage} alt="signUp banner" className="max-w-1/2 h-[956]" />
            <form className="p-10  max-w-1/2">

                <h1 className="text-[#333333] font-[Core Sans C]   text-[34px]">Sign Up</h1>
                <p className="text-[#666666] mb-10">Sign up for free to access to in any of our products</p>

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
                    <p className="text-[#EE1D52] mt-1 mb-1">Error Message</p>
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
                        <input id="password" className="w-full outline-none text=[#807D7E] px-2" placeholder="Enter Your Password" />
                    </div>
                    <p className="mt-1 mb-1 text-[#807D7E] text-[16px]">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                </div>

                <div>
                    <div className="flex gap-x-2 items-center mb-3">
                        <input id="term1" type="checkbox" className="accent-[#3C4242] w-[18px] h-[18px]" />
                        <label htmlFor="term1" className="text-[18px] text-[#807D7E]">Agree to our <span className="border-b">Terms of use</span> and <span className="border-b">Privacy Policy</span></label>
                    </div>
                    <div className="flex gap-x-2 items-center mb-3">
                        <input id="term2" type="checkbox" className="accent-[#3C4242] w-[18px] h-[18px]" />
                        <label htmlFor="term2" className="text-[18px] text-[#807D7E]">Subscribe to our monthly newsletter</label>
                    </div>
                </div>

                <div>

                    <button className="bg-[#8a33fD] text-[#FFFFFF] w-[156px] h-[46px] rounded-md outline-none cursor-pointer mt-10 mb-3">
                        Sign Up
                    </button>
                    <p className="text-[#3C4242]">Already have an account?<span className="border-b"> Log in</span></p>
                </div>

            </form >
        </div >
    )
}



export default SignUp