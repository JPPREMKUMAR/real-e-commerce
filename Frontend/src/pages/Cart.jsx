import { Link } from "react-router-dom"
import { leftStroke, plus, minus, deleteIcon } from "../assets/assets"
import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/MainContext"


const Cart = () => {


    const { cartsList } = useContext(MainContext)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {

        let newTotalPrice = 0
        cartsList.map((item) => {

            newTotalPrice += (item.price * item.quantity)
        })
        console.log(newTotalPrice)
        setTotalPrice(newTotalPrice)

    }, [])

    return (

        <div>

            <div className="p-10 mb-7">
                <div className="flex items-center gap-3 mb-5">
                    <p className="text-[18px] text-[#807D7E]">Home</p>
                    <img src={leftStroke} alt="" />
                    <p className="text-[18px] text-[#3C4242]"> Add To Cart</p>
                </div>
                <p className="text-[14px] text-[#807D7E]">
                    Please fill in the fields below and click place order to complete your purchase!
                </p>
                <p className="text-[14px] text-[#807D7E]">Already registered? <Link to="/login" className="text-[14px] text-[#8A33FD] cursor-pointer text-semibold">Please login here </Link></p>
            </div>

            {/* Cart Items List */}
            <div>
                {/* Cart Items Headings */}
                <div className="px-10 p-5 bg-[#3C4242] text-[#FFFFFF] flex items-center w-full h-[50px]">
                    <div className="w-[30%]">
                        <h1>PRODUCT DETAILS</h1>
                    </div>
                    {/*REMAINIG ITEMS */}
                    <div className="grid grid-cols-5 gap-3 w-[70%]">
                        <div className="flex justify-center items-center">
                            <h1>PRICE</h1>
                        </div>
                        <div className="flex justify-center items-center">
                            <h1>QUANTITY</h1>
                        </div>

                        <div className="flex justify-center items-center">
                            <h1>SHIPPING</h1>
                        </div>
                        <div className="flex justify-center items-center">
                            <h1>SUBTOTAL</h1>
                        </div>
                        <div className="flex justify-center items-center">
                            <h1>ACTION</h1>
                        </div>

                    </div>
                </div>
                {/* CartsList Items  */}
                {

                    cartsList.map((item) => (

                        <div key={item.id} className="p-20 mb-5 mt-5 bg-[#FFFFFF] text-[#3C4242] flex items-center w-full h-[50px]">
                            <div className="w-[30%] h-[120px] flex  gap-5">

                                <div className="w-[100px] ">
                                    <img src={item.product.imageUrl} alt="" />
                                </div>
                                <div className="">
                                    <h1 className="text-[#3C4242] text-[18px] font-bold font-[Causten]">{item.product.name}</h1>
                                    <p className="text-[14px] text-[#807D7E] ">Color : {item.color}</p>
                                    <p className="text-[14px] text-[#807D7E] ">Size : {item.size}</p>
                                </div>

                            </div>
                            {/*REMAINIG ITEMS */}
                            <div className="grid grid-cols-5 items-center gap-3 w-[70%]">
                                <div className="flex justify-center items-center">
                                    <h1 className="text-[#3C4242] font-semibold" >${item.price}.00</h1>
                                </div>

                                <div className="flex justify-center items-center">
                                    <div className="flex justify-center items-center gap-3 rounded-md bg-[#F6F6F6] text-[#3C4242] w-[100px] h-[36px]">
                                        <button className="cursor-pointer">
                                            <img src={minus} alt="" />
                                        </button>
                                        <p>{item.quantity}</p>
                                        <button className="cursor-pointer">
                                            <img src={plus} alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <h1 className="text-[#BEBCBD] text-[18px] ">FREE</h1>
                                </div>
                                <div className="flex justify-center items-center">
                                    <h1 className="text-[#3C4242] font-semibold" >${item.price * item.quantity}.00</h1>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button>
                                        <img src={deleteIcon} alt="delete" />
                                    </button>
                                </div>

                            </div>


                        </div>



                    ))
                }



            </div>


            {/* ToTal Price And Process Checkout */}


            <div className="bg-[#F6F6F6] bg-cover w-full px-20 py-10 flex justify-between pb-20">

                <div>


                    <h1 className="text-[20px] font-bold text-[#3C4242]">Discount Codes</h1>

                    <p className="text-[16px] text-[#807D7E]">Enter your coupon code if you have one</p>

                    <div className="w-[380px] h-[43px] flex border-1 border-[#BEBCBD] rounded-lg mt-10 mb-10">
                        <input type="text" className="px-3 outline-none bg-[#FFFFFF] rounded-l-lg" />
                        <button className="w-[160px] h-full bg-[#8A33FD] text-[#FFFFFF] rounded-r-lg cursor-pointer">Apply Coupon</button>
                    </div>
                    <div>

                        <button className="w-[232px] h-[43px] bg-[#FFFFFF] text-[16px] text-[#3C4242] rounded-lg border-1 border-[#BEBCBD]"> Continue Shopping</button>
                    </div>
                </div>

                <div className="bg-[#F3F3F3] bg-cover px-10 py-2 h-full">

                    <div className="w-[300px]">
                        <div className="flex justify-between items-center mb-2">
                            <h1 className="text-[#3C4242] text-[22px]">Sub Total</h1>
                            <h1 className="text-[#3C4242] text-[22px]">${totalPrice}.00</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className="text-[#3C4242] text-[22px]">Shipping</h1>
                            <h1 className="text-[#3C4242] text-[22px]">$5.00</h1>
                        </div>
                        <div className="flex justify-between items-center mb-5 mt-5" >
                            <h1 className="text-gray-900 font text-[22px]">Grand Total</h1>
                            <h1 className="text-gray-900 font text-[22px]">${totalPrice + 5}.00</h1>
                        </div>
                    </div>

                    <hr className="text-[#BEBCBD] w-full mb-5" />
                    <div className="flex justify-center items-center mt-10 mb-10">

                        <button className="w-[232px] h-[46px] bg-[#8A33FD] text-[#FFFFFF] rounded-lg font-semibold">Proceed To Checkout</button>
                    </div>

                </div>
            </div>

        </div>
    )
}



export default Cart