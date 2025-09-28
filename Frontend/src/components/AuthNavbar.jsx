import { website_logo, search, user, heart, shoppingcart } from "../assets/assets"
import { MainContext } from "../context/MainContext"
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const AuthNavbar = () => {


    const { navigate } = useContext(MainContext)



    return (

        <div className="flex justify-between items-center p-8 px-10 py-6 border-b border-[#BEBCBD]">
            <Link to="/">
                <img src={website_logo} alt="website logo" />
            </Link>

            <ul className="flex items-center gap-x-3">
                <Link to="/" className="text-[#807D7E] text-md hover:text-[#3C4242]"  >Shop</Link>
                <Link to="/products" className="text-[#807D7E] text-md hover:text-[#3C4242]"  >Men</Link>
                <Link to="/products" className="text-[#807D7E] text-md hover:text-[#3C4242]"  >Women</Link>
                <Link to="/products" className="text-[#807D7E] text-md hover:text-[#3C4242]"  >Combos</Link>
                <Link to="/products" className="text-[#807D7E] text-md hover:text-[#3C4242]"  >Joggers</Link>
            </ul>
            <div className="w-[250px] h-[45px] bg-[#F6F6F6] text-[#807D7E] bg-cover flex  items-center rounded-md p-2 px-3 gap-2">
                <img src={search} alt="search icon" />
                <input type="search" className="text-[#807D7E] w-full outline-none" placeholder="Search" />
            </div>
            <ul className="flex items-center px-4 gap-x-5 ">

                <Link to="/wishlist" className="bg-[#F6F6F6] w-[44px] h-[44px] rounded flex justify-center items-center rounded-md"   ><img src={heart} alt="heart" /></Link>
                <Link to="/contact-details" className="bg-[#F6F6F6] w-[44px] h-[44px] rounded flex justify-center items-center rounded-md"  ><img src={user} alt="user" /></Link>
                <Link to="/cart" className="bg-[#F6F6F6] w-[44px] h-[44px] rounded flex justify-center items-center rounded-md"   ><img src={shoppingcart} alt="shopping cart" /></Link>
            </ul>


        </div>
    )

}



export default AuthNavbar