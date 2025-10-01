
import { emptyCart } from "../assets/assets"

const EmptyCart = () => {


    return (

        <div className="bg-[#F6F6F6] h-[700px] bg-cover flex justify-center items-center">

            <div className="flex flex-col justidy-center items-center ">

                <img src={emptyCart} alt="empty cart" />

                <h1 className="text-[34px]">Your cart is empty and sad :(</h1>
                <p className="text-[#807D7E] ">Add something to make it happy!</p>
                <div className="mt-10 mb-10">
                    <button className="bg-[#8A33FD] text-[#FFFFFF] px-7 py-3 rounded-md">Continue Shopping</button>
                </div>
            </div>
        </div>
    )
}



export default EmptyCart