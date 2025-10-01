import Title from "../components/Title"
import { MainContext } from "../context/MainContext"
import { useState, useContext, useEffect } from "react"

const Checkout = () => {

    const { cartsList } = useContext(MainContext)
    return (

        <div>
            <Title text="Check Out" />
            <div className="px-10 mb-20 flex gap-5 ">


                {/*Part1 */}
                <div className="w-2/3">
                    <h1 className="text-[22px] text-[#3C4242]">Billing Details</h1>


                    {/* Address Form */}

                    <form className="mt-10 mb-7">
                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                            <div className="flex flex-col">
                                <label htmlFor="firstName" className="text-[#3C4242] text-[16px] font-semibold font-[Causten] mt-1 mb-2">First Name*</label>
                                <input placeholder="First Name" id="firstName" className="bg-[#F6F6F6] outline-none px-5 py-3 rounded-md text-[#807D7E] text-[14px]" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="lastName" className="text-[#3C4242] text-[16px] font-semibold font-[Causten] mt-1 mb-2">First Name*</label>
                                <input placeholder="Last Name" id="lastName" className="bg-[#F6F6F6] outline-none px-5 py-3 rounded-md text-[#807D7E] text-[14px]" />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="country" className="text-[#3C4242] text-[16px] font-semibold font-[Causten] mt-1 mb-2">Country/Region*</label>
                                <input placeholder="Country/Region" id="country" className="bg-[#F6F6F6] outline-none px-5 py-3 rounded-md text-[#807D7E] text-[14px]" />
                            </div>


                            <div className="flex flex-col">
                                <label htmlFor="company" className="text-[#3C4242] text-[16px] font-semibold font-[Causten] mt-1 mb-2">Company Name</label>
                                <input placeholder="Company(optional)" id="company" className="bg-[#F6F6F6] outline-none px-5 py-3 rounded-md text-[#807D7E] text-[14px]" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="street" className="text-[#3C4242] text-[16px] font-semibold font-[Causten] mt-1 mb-2">Street Address*</label>
                                <input placeholder="House Number and Street Name" id="street" className="bg-[#F6F6F6] outline-none px-5 py-3 rounded-md text-[#807D7E] text-[14px]" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="landmark" className="text-[#3C4242] text-[16px] font-semibold font-[Causten] mt-1 mb-2">Landmark*</label>
                                <input placeholder="Landmark" id="landmark" className="bg-[#F6F6F6] outline-none px-5 py-3 rounded-md text-[#807D7E] text-[14px]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-x-10 gap-y-5 mt-4">

                            <div className="flex flex-col">
                                <label htmlFor="city" className="text-[#3C4242] text-[16px] font-semibold font-[Causten] mt-1 mb-2">City*</label>
                                <input placeholder="Town/City" id="city" className="bg-[#F6F6F6] outline-none px-5 py-3 rounded-md text-[#807D7E] text-[14px]" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="state" className="text-[#3C4242] text-[16px] font-semibold font-[Causten] mt-1 mb-2">State*</label>
                                <input placeholder="State" id="state" className="bg-[#F6F6F6] outline-none px-5 py-3 rounded-md text-[#807D7E] text-[14px]" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="postalcode" className="text-[#3C4242] text-[16px] font-semibold font-[Causten] mt-1 mb-2">Postal Code*</label>
                                <input placeholder="Postal Code" id="postalcode" className="bg-[#F6F6F6] outline-none px-5 py-3 rounded-md text-[#807D7E] text-[14px]" />
                            </div>

                        </div>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-4">
                            <div className="flex flex-col">
                                <label htmlFor="phone" className="text-[#3C4242] text-[16px] font-semibold font-[Causten] mt-1 mb-2">Phone*</label>
                                <input placeholder="Phone" id="phone" className="bg-[#F6F6F6] outline-none px-5 py-3 rounded-md text-[#807D7E] text-[14px]" />
                            </div>
                        </div>
                        <div className="mt-10 mb-5 ">
                            <button className="bg-[#8A33FD] text-[#FFFFFF] px-5 py-3 rounded-md">Continue to delivery</button>

                            <div className="mt-4 mb-4 flex gap-x-2">
                                <input type="checkbox" id="checkId" />
                                <label htmlFor="checkId" >Save my information for a faster checkout</label>
                            </div>
                        </div>
                        <hr className="text-[#EDEEF2]" />
                    </form>

                    {/* Shipping Address */}

                    <div>
                        <h1 className="text-[22px] text-[#3C4242] font-semibold">Shipping Address</h1>
                        <p className="text-[16px] text-[#3C4242] ">Select the address that matches your card or payment method.</p>

                        <div className="bg-[#F6F6F6] bg-cover rounded-md px-10 mt-5 mb-5 flex flex-col gap-4 py-4">
                            <div className="flex items-center gap-y-3 gap-x-2">
                                <input type="radio" name="address" id="billingaddress" className="accent-[#3C4242]" />
                                <label htmlFor="billingaddress" className="text-[20px] text-[#3C4242]">Same as Billing Address</label>
                            </div>
                            <hr className="text-[#BEBCBD] " />
                            <div className="flex items-center gap-y-3 gap-x-2">
                                <input type="radio" name="address" id="billingaddress1" className="accent-[#3C4242]" />
                                <label htmlFor="billingaddress1" className="text-[20px] text-[#3C4242]">Use a different shipping address</label>
                            </div>


                        </div>
                    </div>

                    {/*Shipping Method */}

                    <div>
                        <h1 className="text-[22px] text-[#3C4242] font-semibold">Shipping Method</h1>

                        <div className="bg-[#F6F6F6] bg-cover rounded-md px-10 mt-5 mb-5 flex flex-col gap-4 py-4">
                            <p className="text-[20px] text-[#3C4242]">Arrives by Monday,June 7</p>
                            <hr className="text-[#BEBCBD] " />
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-[20px] text-[#3C4242]">Delivery Charges</p>
                                    <p className="text-[14px] text-[#807D7E]">Additional fees  may apply</p>
                                </div>
                                <div >
                                    <h1 className="text-[20px] text-[#3C4242]">$5.00</h1>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                        <h1 className="text-[22px] text-[#3C4242] font-semibold">Payment Method</h1>
                        <p className="text-[16px] text-[#3C4242] mt-2 mb-3 ">All transactions are secure and encrypted.</p>

                        <div className="bg-[#F6F6F6] bg-cover rounded-md px-10 mt-5 mb-5 flex flex-col gap-5 py-4">
                            <div className="flex items-center gap-y-3 gap-x-2">
                                <input type="radio" name="payment" id="cod" className="accent-[#3C4242]" />
                                <div>
                                    <label htmlFor="cod" className="text-[20px] text-[#3C4242]">Cash on delivery</label>
                                    <p className="text-[#3C4242] text-[14px]">Pay with cash upon delivery.</p>
                                </div>
                            </div>
                            <hr className="text-[#BEBCBD] " />
                            <div className="flex items-center gap-y-3 gap-x-2 mb-3">
                                <input type="radio" name="payment" id="razorpay" className="accent-[#3C4242]" />
                                <label htmlFor="razorpay" className="text-[20px] text-[#3C4242]">Razorpay</label>
                            </div>


                        </div>

                    </div>


                    {/* Pay Now */}

                    <div className="mt-10 mb-10">
                        <botton className="text-[#FFFFFF] bg-[#8A33FD] px-6 py-3 rounded-md" >Pay Now</botton>
                    </div>

                </div>
                {/*Part2 */}
                <div className="w-1/3 px-3 ">

                    <div className="p-5 mt-2 mb-3 rounded-md shadow-lg">
                        <h1 className="text-[#3C4242] font-bold mb-2">Order Summary </h1>
                        <hr className="text-[#EDEEF2]" />
                        {/* Cart Items List */}

                        <div className="">

                            {

                                cartsList.map((item) => (

                                    <div key={item.id} className="mt-3 py-5 ">
                                        <div className="flex items-center gap-x-1 mb-1">

                                            <div className="w-1/4">
                                                <img alt="" src={item.product.imageUrl} className="w-[60px] h-[60px]" />
                                            </div>
                                            <div className="w-2/4">
                                                <p className="text-[14px] text-[#3C4242] my-2">{item.product.name} <span className="text-[#807D7E]"> X {item.quantity}</span></p>
                                                <p className="text-[12px] text-[#3C4242] my-1">Color: <span className="text-[#807D7E]">{item.color}</span></p>

                                            </div>
                                            <div className="w-1/4">
                                                <p className="text-[14px] text-[#807D7E]">${item.price * item.quantity}.00 </p>
                                            </div>
                                        </div>
                                        <hr className="text-[#EDEEF2] mt-1 mb-1" />
                                    </div>

                                ))
                            }
                            <div>
                                <div className="flex justify-between items-center my-2">
                                    <h1>Subtotal <span className="text-[#3C4242]"> ( {cartsList.length} Items )</span></h1>
                                    <h1>$513.00</h1>
                                </div>
                                <div className="flex justify-between items-center my-2">
                                    <h1>Savings</h1>
                                    <h1>-$30.00</h1>
                                </div>
                                <hr className="text-[#EDEEF2] mt-1 mb-1" />
                                <div className="flex justify-between items-center my-2">
                                    <h1>Shipping</h1>
                                    <h1>-$5.00</h1>
                                </div>
                                <hr className="text-[#EDEEF2] mt-1 mb-1" />
                                <div className="flex justify-between items-center my-2">
                                    <h1>Total</h1>
                                    <h1>$478.00</h1>
                                </div>


                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div >
    )
}



export default Checkout