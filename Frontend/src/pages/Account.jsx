
import { Link } from "react-router-dom"
import { leftStroke, myOrders } from "../assets/assets"



import { useState } from "react"

const Account = () => {


    const [isActive, setIsActive] = useState('info')



    return (

        <div>
            <div className="flex items-center gap-2 px-10 text-[#807D7E] ">
                <Link to="/account" >Home</Link>
                <img src={leftStroke} alt="" />
                <Link to="/account" >My Account</Link>
                <img src={leftStroke} alt="" />
                <Link to="/account" >Delivery Address</Link>
            </div>

            {/* Details Page */}

            <div className="flex p-10">
                {/* Part2 */}
                <div className="w-1/4">

                    <h1 className="text-[#3C4242] text-[30px] font-[Core Sans C]"><span className="w-[6px] h-[30px] bg-[#8A33FD] text-[#8A33FD] bg-cover  rounded-md"> |</span> Hello Prem</h1>
                    <p className="text-[#807D7E] my-2">Welcome to Your Account</p>

                    <div className="mt-10 mb-10 ">
                        <div onClick={() => setIsActive('orders')} className={`flex gap-2 items-center px-10 py-4 ${isActive === "orders" && 'border-l-2 rounded-r-md bg-[#F6F6F6]'}`}>
                            <img alt="" src={myOrders} />
                            <p className="text-[#807D7E] text-[14px]">My Orders</p>
                        </div>
                        <div onClick={() => setIsActive('wishlist')} className={`flex gap-2 items-center px-10 py-4 ${isActive === "wishlist" && 'border-l-2 rounded-r-md bg-[#F6F6F6]'}`}>
                            <img alt="" src={myOrders} />
                            <p className="text-[#807D7E] text-[14px]">Wishlist</p>
                        </div>
                        <div onClick={() => setIsActive('info')} className={`flex gap-2 items-center px-10 py-4 ${isActive === "info" && 'border-l-2 rounded-r-md bg-[#F6F6F6]'}`} >
                            <img alt="" src={myOrders} />
                            <p className="text-[#807D7E] text-[14px]">My info</p>
                        </div>
                        <div onClick={() => setIsActive('signout')} className={`flex gap-2 items-center px-10 py-4 ${isActive === "signout" && 'border-l-2 rounded-r-md bg-[#F6F6F6]'}`}>
                            <img alt="" src={myOrders} />
                            <p className="text-[#807D7E] text-[14px]">Sign out</p>
                        </div>

                    </div>

                </div>
                {/* Part2 */}
                <div className="w-3/4">part2</div>

            </div>

        </div>
    )
}



export default Account