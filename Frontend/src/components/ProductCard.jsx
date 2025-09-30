import { Link } from "react-router-dom"
import { product1, heart } from "../assets/assets"


const ProductCard = (props) => {

    const { item } = props

    const { id, name, brand, imageUrl, price } = item
    //console.log(item)
    console.log(imageUrl)
    return (

        <div className="cursor-pointer w-[282px] ">
            <div className="h-[370px]  rounded-lg p-5 flex justify-end" style={{ backgroundImage: `url(${imageUrl})` }} >
                <div className="w-[32px] h-[32px] bg-[#FFFFFF] rounded-full flex justify-center items-center">
                    <button className="cursor-pointer">

                        <img src={heart} alt="heart" />
                    </button>
                </div>
            </div>
            <Link to={`/products/${item.id}`} className="flex justify-between items-center mt-5 mb-5 ">

                <div>
                    <p className="text-[#3C4242] text-[16px] font-[Alkalami] font-semibold">{name}</p>
                    <p className="text-[#807D7E] ">{brand}</p>
                </div>
                <div>

                    <button className="text-[#3C4242] bg-[#F6F6F6] rounded-md w-[82px] h-[36px] cursor-pointer">${price}.00</button>
                </div>


            </Link>

        </div>
    )
}



export default ProductCard