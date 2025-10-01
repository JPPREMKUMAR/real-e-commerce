

import { Link } from "react-router-dom"
import { leftStroke, myOrders, greenHeart } from "../assets/assets"
import ProductCard from "../components/ProductCard"
import Title from "../components/Title"
import { useContext, useState } from "react"
import { MainContext } from "../context/MainContext"

const Wishlist = () => {


    const [isActive, setIsActive] = useState('wishlist')
    const { navigate, wishlistList, productsList } = useContext(MainContext)
    console.log(wishlistList.length)

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
                        <div onClick={() => navigate('/account/my-orders')} className={`flex gap-2 items-center px-10 py-4 ${isActive === "orders" && 'border-l-2 rounded-r-md bg-[#F6F6F6]'}`}>
                            <img alt="" src={myOrders} />
                            <p className="text-[#807D7E] text-[14px]">My Orders</p>
                        </div>
                        <div onClick={() => navigate('/account/wishlist')} className={`flex gap-2 items-center px-10 py-4 ${isActive === "wishlist" && 'border-l-2 rounded-r-md bg-[#F6F6F6]'}`}>
                            <img alt="" src={myOrders} />
                            <p className="text-[#807D7E] text-[14px]">Wishlist</p>
                        </div>
                        <div onClick={() => navigate('/account/info')} className={`flex gap-2 items-center px-10 py-4 ${isActive === "info" && 'border-l-2 rounded-r-md bg-[#F6F6F6]'}`} >
                            <img alt="" src={myOrders} />
                            <p className="text-[#807D7E] text-[14px]">My info</p>
                        </div>
                        <div onClick={() => navigate('/login')} className={`flex gap-2 items-center px-10 py-4 ${isActive === "signout" && 'border-l-2 rounded-r-md bg-[#F6F6F6]'}`}>
                            <img alt="" src={myOrders} />
                            <p className="text-[#807D7E] text-[14px]">Sign out</p>
                        </div>

                    </div>

                </div>
                {/* Part2 */}

                <div className="w-3/4 px-5 flex justify-center items-center">

                    <div className="shadow-lg border-2-[#F0F9F4] w-[500px] px-10 py-5  flex flex-col justify-center items-center">

                        <div className="bg-[#F0F9F4] w-[170px] h-[170px] flex justify-center items-center rounded-full">
                            <img src={greenHeart} alt="" />
                        </div>

                        <div className="my-5">

                            <h1 className="text-center text-[#3C4242] text-[34px] my-2">Your wishlist is empty.</h1>
                            <p className="text-center text-[14px] text-[#807D7E] ">You don’t have any products in the wishlist yet. You will find a lot of interesting products on our Shop page.</p>
                        </div>

                        <div className="my-5">

                            <button className="text-[#FFFFFF] bg-[#8A33FD] py-3 px-10 rounded-md">Continue Shopping</button>
                        </div>

                    </div>

                </div>

            </div>

            {/* Recent Visits */}

            <div>


                <Title text="Recently Viewed" />

                <div className="grid grid-cols-4 px-10 gap-x-4 mb-10">

                    {

                        productsList.slice(0, 4).map((item) => (

                            <ProductCard key={item.id} item={item} />
                        ))
                    }
                </div>

            </div>


        </div>
    )
}



export default Wishlist