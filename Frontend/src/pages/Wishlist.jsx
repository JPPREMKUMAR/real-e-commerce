import { useContext } from "react"
import { MainContext } from "../context/MainContext"




const Wishlist = () => {

    const { navigate, wishlistList } = useContext(MainContext)
    if (wishlistList === 0) {

        return (navigate("/account/empty-wishlist"))
    } else {

        return (navigate("/account/wishlist-items"))
    }

}



export default Wishlist