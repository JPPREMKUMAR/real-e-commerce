import { Link } from "react-router-dom"

import { inIcon, instaIcon, fbIcon, twIcon } from "../assets/assets"



const Footer = () => {

    return (


        <div className="p-20 bg-[#3C4242] bg-cover position:bottom">

            <div>
                <div className="flex gap-5 gap-x-10">

                    <div className="w-1/5">
                        <h1 className="text-[#F6F6F6] font-bold font-[Causten] text-[24px]">Need Help</h1>
                        <div className="mt-5 mb-5 flex flex-col text-[18px] gap-y-3">
                            <Link to="/" className="text-[#F6F6F6]">Contact Us</Link>
                            <Link to="/" className="text-[#F6F6F6]">Track Order</Link>
                            <Link to="/" className="text-[#F6F6F6]">Returns & Refunds</Link>
                            <Link to="/" className="text-[#F6F6F6]">FAQ's</Link>
                            <Link to="/" className="text-[#F6F6F6]">Carrer</Link>
                        </div>

                    </div>

                    <div className="w-1/5">
                        <h1 className="text-[#F6F6F6] font-bold font-[Causten] text-[24px]">Company</h1>
                        <div className="mt-5 mb-5 flex flex-col text-[18px] gap-y-3">
                            <Link to="/" className="text-[#F6F6F6]">About Us</Link>
                            <Link to="/" className="text-[#F6F6F6]">Our Blog</Link>
                            <Link to="/" className="text-[#F6F6F6]">Collaboration</Link>
                            <Link to="/" className="text-[#F6F6F6]">Media</Link>
                        </div>

                    </div>


                    <div className="w-1/5">
                        <h1 className="text-[#F6F6F6] font-bold font-[Causten] text-[24px]">More Info</h1>
                        <div className="mt-5 mb-5 flex flex-col text-[18px] gap-y-3">
                            <Link to="/" className="text-[#F6F6F6]">Term and Conditions</Link>
                            <Link to="/" className="text-[#F6F6F6]">Privacy Policy</Link>
                            <Link to="/" className="text-[#F6F6F6]">Shipping Policy</Link>
                            <Link to="/" className="text-[#F6F6F6]">Sitemap</Link>
                        </div>

                    </div>


                    <div className="w-2/5">
                        <h1 className="text-[#F6F6F6] font-bold font-[Causten] text-[24px]">Location</h1>
                        <div className="mt-5 mb-5 flex flex-col text-[18px] gap-y-3">
                            <p className="text-[#F6F6F6]">support@gmail.in</p>
                            <p className="text-[#F6F6F6]">Address</p>
                            <p className="text-[#F6F6F6]">Landmark</p>
                        </div>

                    </div>


                </div>
                {/*Social Media */}
                <div className="flex gap-x-2">
                    <div className="bg-[#F6F6F6] w-[40px] h-[40px] flex items-center justify-center rounded-md">
                        <img src={fbIcon} alt="fb" />
                    </div>
                    <div className="bg-[#F6F6F6] w-[40px] h-[40px] flex items-center justify-center rounded-md">
                        <img src={instaIcon} alt="insta" />
                    </div>
                    <div className="bg-[#F6F6F6] w-[40px] h-[40px] flex items-center justify-center rounded-md">
                        <img src={twIcon} alt="twt" />
                    </div>
                    <div className="bg-[#F6F6F6] w-[40px] h-[40px] flex items-center justify-center rounded-md">
                        <img src={inIcon} alt="in" />
                    </div>

                </div>



            </div>
        </div>)
}




export default Footer