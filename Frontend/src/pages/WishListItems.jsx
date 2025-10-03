





import { Link } from "react-router-dom"
import { leftStroke, myOrders, greenHeart } from "../assets/assets"
import ProductCard from "../components/ProductCard"
import Title from "../components/Title"
import { useContext, useState } from "react"
import { MainContext } from "../context/MainContext"

const WishListItems = () => {


    const [isActive, setIsActive] = useState('wishlist')
    const { navigate, wishlistList, productsList } = useContext(MainContext)
    console.log(wishlistList.length)

    return (

        <div>
            {

                wishlistList.length !== 0 ? <div>
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

                        <div className="w-3/4 px-5">
                            <h1 className="text-[#3C4242] text-[28px]">Wishlist</h1>
                            <div className="flex flex-col gap-4 ">

                                {

                                    wishlistList.map((item) => (

                                        <div key={item.id} className="flex ">
                                            <div className="mr-5">
                                                <img src={item.product.imageUrl} className="w-[100px] h-[100px]" alt="" />
                                            </div>
                                            <div className="w-full grid grid-cols-2">
                                                <div className="w-full">
                                                    <p className="text-[#3C4242]">{item.product.name}</p>
                                                    <p className="text-[#3C4242]">Color: <span className="text-[#807D7E]" >{item.color}</span></p>
                                                    <p className="text-[#3C4242]">Quantity: <span className="text-[#807D7E]" >{item.quantity}</span></p>

                                                </div>
                                                <div className="w-full grid grid-cols-3 gap-5 items-center">
                                                    <div>
                                                        <h1 className="text-[#807D7E]" >${item.price * item.quantity}.00</h1>
                                                    </div>
                                                    <div>
                                                        <button className="text-[#FFFFFF] text-[14px] bg-[#8A33FD] px-5 py-3 rounded-md">Add To Cart</button>
                                                    </div>
                                                    <div>
                                                        <button className="text-[#FFFFFF] text-[14px] bg-red-500 px-5 py-3 rounded-md">Delete</button>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                    </div>


                </div> : (<div>{

                    navigate("/account/empty-wishlist")
                } </div>)
            }


        </div>



    )
}



export default WishListItems