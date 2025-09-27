import { website_logo, search } from "../assets/assets"
import { MainContext } from "../context/MainContext"
import { useContext } from 'react'


const Navbar = () => {


    const { navigate } = useContext(MainContext)



    return (

        <div className="flex justify-between items-center p-8 px-10 py-6 border-b border-[#BEBCBD]">
            <div>
                <img src={website_logo} alt="website logo" />
            </div>
            <button className="w-[186px] h-[45px] bg-[#F6F6F6] text-[#807D7E] bg-cover flex justify-center items-center rounded-md">
                <img src={search} alt="search icon w-1/2" />
                <p className="text-[#807D7E] w-1/2" >Search</p>
            </button>
            <div className="flex gap-[12px] justify-center items-center">

                <button className=" text-[#8a33fD] w-[156px] h-[46px] rounded-md border border-[#3C4242] outline-none cursor-pointer"
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>
                <button className="bg-[#8a33fD] text-[#FFFFFF] w-[156px] h-[46px] rounded-md outline-none cursor-pointer "
                    onClick={() => navigate("/signup")}
                >
                    Sign Up
                </button>
            </div>


        </div>
    )

}



export default Navbar