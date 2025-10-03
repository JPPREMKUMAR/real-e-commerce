
import { Link } from "react-router-dom"
import { leftStroke, myOrders, greenHeart } from "../assets/assets"
import ProductCard from "../components/ProductCard"
import Title from "../components/Title"
import { useContext, useState } from "react"
import { MainContext } from "../context/MainContext"
import axios from "axios"


const AddAddress = () => {



    const { navigate, ordersList, productsList, backendUrl, jwtToken } = useContext(MainContext)
    const [isActive, setIsActive] = useState('info')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [country, setCountry] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [street, setStreet] = useState('')
    const [landmark, setLandmark] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [phone, setPhone] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [deliveryInstruction, setDeliveryInstruction] = useState('')


    const onSubmitForm = async (event) => {

        event.preventDefault()

        //console.log(firstName, lastName, country, companyName, state, city, street, landmark, phone, pinCode, deliveryInstruction)

        const newItem = {
            firstName, lastName, country, companyName, state, city, street, landmark, phone, pinCode, deliveryInstruction

        }

        const response = await axios.post(backendUrl + "/api/user/addAddress", { firstName, lastName, country, companyName, state, city, street, landmark, phone, pinCode, deliveryInstruction }, { headers: { jwtToken: jwtToken } })
        console.log(response.data)

    }






    return (

        <div>
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

                    <div className="w-3/4 px-5">
                        <h1 className="text-[#3C4242] text-[28px]">My Info</h1>

                        <form className="mt-5 mb-5" onSubmit={onSubmitForm}>

                            <h1 className="text-[#3C4242] font-bold font-[30px] font-[Core Sans C]">Address</h1>
                            <div className="mt-3 mb-3 grid grid-cols-2 gap-x-4 gap-y-3">

                                <div>
                                    <p className="text-[18px] text-[#3C4242] font-[Causten] font-bold">First Name*</p>
                                    <div className="bg-[#F6F6F6] rounded-md px-5 py-3 mt-2 ">
                                        <input type="text" placeholder="First Name" className="w-full outline-none text-[#807D7E]" required value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[18px] text-[#3C4242] font-[Causten] font-bold">Last Name*</p>
                                    <div className="bg-[#F6F6F6] rounded-md px-5 py-3 mt-2 ">
                                        <input type="text" placeholder="Last Name" className="w-full outline-none text-[#807D7E]" required value={lastName} onChange={(event) => setLastName(event.target.value)} />
                                    </div>
                                </div>


                                <div>
                                    <p className="text-[18px] text-[#3C4242] font-[Causten] font-bold">Country/Region*</p>
                                    <div className="bg-[#F6F6F6] rounded-md px-5 py-3 mt-2 ">
                                        <input type="text" placeholder="Country/Region" className="w-full outline-none text-[#807D7E]" required value={country} onChange={(event) => setCountry(event.target.value)} />
                                    </div>
                                </div>


                                <div>
                                    <p className="text-[18px] text-[#3C4242] font-[Causten] font-bold">Company Name</p>
                                    <div className="bg-[#F6F6F6] rounded-md px-5 py-3 mt-2 ">
                                        <input type="text" placeholder="Company (optional)" className="w-full outline-none text-[#807D7E]" value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[18px] text-[#3C4242] font-[Causten] font-bold">Street Address*</p>
                                    <div className="bg-[#F6F6F6] rounded-md px-5 py-3 mt-2 ">
                                        <input type="text" placeholder="Street Address" className="w-full outline-none text-[#807D7E]" required value={street} onChange={(event) => setStreet(event.target.value)} />
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[18px] text-[#3C4242] font-[Causten] font-bold">Landmark*</p>
                                    <div className="bg-[#F6F6F6] rounded-md px-5 py-3 mt-2 ">
                                        <input type="text" placeholder="Landmark" className="w-full outline-none text-[#807D7E]" required value={landmark} onChange={(event) => setLandmark(event.target.value)} />
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[18px] text-[#3C4242] font-[Causten] font-bold">City*</p>
                                    <div className="bg-[#F6F6F6] rounded-md px-5 py-3 mt-2 ">
                                        <input type="text" placeholder="City/Town" className="w-full outline-none text-[#807D7E]" required value={city} onChange={(event) => setCity(event.target.value)} />
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[18px] text-[#3C4242] font-[Causten] font-bold">State*</p>
                                    <div className="bg-[#F6F6F6] rounded-md px-5 py-3 mt-2 ">
                                        <input type="text" placeholder="State" className="w-full outline-none text-[#807D7E]" required value={state} onChange={(event) => setState(event.target.value)} />
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[18px] text-[#3C4242] font-[Causten] font-bold">Phone*</p>
                                    <div className="bg-[#F6F6F6] rounded-md px-5 py-3 mt-2 ">
                                        <input type="text" placeholder="Phone" className="w-full outline-none text-[#807D7E]" required value={phone} onChange={(event) => setPhone(event.target.value)} />
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[18px] text-[#3C4242] font-[Causten] font-bold">Pin Code*</p>
                                    <div className="bg-[#F6F6F6] rounded-md px-5 py-3 mt-2 ">
                                        <input type="text" placeholder="Pin Code" className="w-full outline-none text-[#807D7E]" required value={pinCode} onChange={(event) => setPinCode(event.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-[18px] text-[#3C4242] font-[Causten] font-bold">Delivery Instruction</p>
                                <div className="bg-[#F6F6F6] rounded-md px-5 py-3 mt-2 ">

                                    <textarea rows="5" cols="55" type="text" placeholder="Delivery Instruction" className="w-full outline-none text-[#807D7E]" required value={deliveryInstruction} onChange={(event) => setDeliveryInstruction(event.target.value)} ></textarea>
                                </div>
                            </div>

                            <div className="mb-5 mt-5">

                                <div className="flex items-center gap-x-4">

                                    <input type="checkbox" id="id1" />
                                    <label className="text-[#3C4242]" htmlFor="id1" >Set as default shipping address</label>
                                </div>


                                <div className="flex items-center gap-x-4">

                                    <input type="checkbox" id="id2" />
                                    <label className="text-[#3C4242]" htmlFor="id2" >Set as default billing address</label>
                                </div>
                            </div>

                            <div className="mb-5 mt-5 flex items-center gap-x-10">
                                <div>
                                    <button className="px-8 py-2 bg-[#8A33FD] text-[#FFFFFF] rounded-md shadow-md ">Save</button>
                                </div>
                                <div>
                                    <button type="submit" className="px-8 py-2 bg-[#F6F6F6] text-[#807D7E] rounded-md shadow-md ">Cancel</button>
                                </div>


                            </div>

                        </form>

                    </div>

                </div>


            </div>


        </div>



    )
}








export default AddAddress