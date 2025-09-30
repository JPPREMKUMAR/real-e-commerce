import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { MainContext } from "../context/MainContext"
import Title from "../components/Title"
import ProductCard from "../components/ProductCard"




import {
    downStroke, upStroke, leftStroke, stars, commentsIcon, cartIcon,
    freeShipping, creditcard, size, truck

} from "../assets/assets"



const ProductDetails = (props) => {


    const { productsList } = useContext(MainContext)

    const { id } = useParams()
    console.log(id)
    console.log(productsList)
    const newItem = productsList[0]
    console.log(newItem)




    const { name, imageUrl, description, price, brand, images, sizes, colors, otherDetails, Category, subCategory } = newItem

    const [activeImageUrl, setActiveImageUrl] = useState(imageUrl)
    const [isColor, setIsColor] = useState(colors[0])

    const onChangeImage = (url) => {

        setActiveImageUrl(url)
        console.log("button Clicked")
    }


    return (

        <div>

            <div className="grid grid-cols-2 mb-20">


                {/*Part1  */}

                <div className="flex ">
                    <div className="p-20 flex flex-col justify-center gap-5 gap-x-5">
                        {
                            images.map((item, index) => (

                                <button onClick={() => onChangeImage(item)} key={index} className={`w-[70px] h-[70px] rounded-lg ${activeImageUrl === item && `border border-[#3C4242]`}`} ><img src={item} alt="image" className="w-full h-full rounded-lg" /></button>
                            ))

                        }
                        <div className="flex flex-col items-center gap-5">
                            <button className="w-[22px] h-[22px] rounded-full flex justify-center items-center">
                                <img src={upStroke} alt="" />
                            </button>
                            <button className="w-[22px] h-[22px] bg-[#3C4242] rounded-full flex justify-center items-center">
                                <img src={downStroke} alt="" />
                            </button>

                        </div>


                    </div>
                    <div className="h-[785px]">
                        <img src={activeImageUrl} alt="main Image" className="w-full h-full" />
                    </div>


                </div>

                {/*Part2  */}

                <div className="p-10">
                    <div className="flex gap-x-4 pap-y-2 items-center ">
                        <p className="text-[#807D7E] text-[16px] ">Shop</p>
                        <img src={leftStroke} alt="" />
                        <p className="text-[#807D7E] text-[16px]" >{Category}</p>
                        <img src={leftStroke} alt="" />
                        <p className="text-[#807D7E] text-[16px] ">{subCategory}</p>
                    </div>
                    {/* Details */}
                    <div className="mt-5 mb-5">
                        <h1 className="text-[36px] text-[#3C4242] ">{name}</h1>
                        <div className="mt-5 mb-5 flex items-center gap-5">
                            <div className="flex items-center gap-4">
                                <img alt="stars" src={stars} />
                                <p className="text-[#807D7E]">3.5</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <img alt="comments" src={commentsIcon} />
                                <p className="text-[#807D7E]">120 comment</p>
                            </div>
                        </div>

                        {/*Sizes */}
                        <h1 className=" text-[18px] text-gray-700 mb-2 mt-10 ">Select Size</h1>
                        <div className="flex gap-x-4  mb-5 ">

                            {
                                sizes.map((item) => (
                                    <button className="w-[38px] h-[38px] border border-[#BEBCBD] rounded-lg shadow-lg text-[14px] text-[#3C4242] cursor-pointer" key={item.id} >{item.name}</button>
                                ))
                            }
                        </div>

                        {/* Colors */}
                        <h1 className=" text-[18px] text-gray-700 mb-2 mt-10 ">Colors</h1>
                        <div className="flex gap-x-4 mb-5 ">
                            {
                                colors.map((item) => (
                                    <button className={`w-[26px] h-[26px] rounded-full shadow-lg text-[14px] text-[#3C4242] cursor-pointer ${isColor === item && ` ring ring-gray-500 ring-offset-3 `}`}
                                        key={item.id}
                                        onClick={() => setIsColor(item)}
                                        style={{ backgroundColor: `${item.color}` }}
                                    >
                                    </button>
                                ))
                            }
                        </div>

                        {/* Add to Cart and Price */}
                        <div className="flex items-center gap-5 mt-10 mb-10">

                            <button className="bg-[#8A33FD] rounded-md w-[200px] h-[46px] text-[#FFFFFF] flex justify-center items-center gap-3 ">
                                <img src={cartIcon} alt="cart" />
                                Add to cart
                            </button>
                            <button className="w-[150px] h-[46px] border-2 border-[#3C4242] text-[#3C4242] font-bold rounded-md" >${price}.00 </button>
                        </div>
                        <hr className="text-[#BEBCBD] mt-10 mb-10 " />

                        {/* Main Methods */}
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex items-center gap-x-3">
                                <div className="w-[44px] h-[44px] rounded-full flex justify-center items-center bg-[#F6F6F6]">
                                    <img src={creditcard} alt="" />
                                </div>
                                <p className="text-[#3C4242] text-[18px] ">Secure payment</p>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="w-[44px] h-[44px] rounded-full flex justify-center items-center bg-[#F6F6F6]">
                                    <img src={size} alt="" />
                                </div>
                                <p className="text-[#3C4242] text-[18px] ">Size & Fit</p>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="w-[44px] h-[44px] rounded-full flex justify-center items-center bg-[#F6F6F6]">
                                    <img src={truck} alt="" />
                                </div>
                                <p className="text-[#3C4242] text-[18px] ">Free shipping</p>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="w-[44px] h-[44px] rounded-full flex justify-center items-center bg-[#F6F6F6]">
                                    <img src={freeShipping} alt="" />
                                </div>
                                <p className="text-[#3C4242] text-[18px] ">Free Returns</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Description */}

            <Title text="Product Description" />
            <div className="grid grid-cols-2 px-10 mb-10">
                {/*Part1 */}
                <div >
                    <div className="flex items-center gap-5 mb-5 ">
                        <div>
                            <p className="border-b w-20">Description</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-[#807D7E]">User Comments</p>
                            <button className="w-[26px] h-[26px] bg-[#8A33FD] text-[#FFFFFF] text-sm rounded-md">
                                0
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-[#807D7E]">Question & Answer</p>
                            <button className="w-[26px] h-[26px] bg-[#3C4242] text-[#FFFFFF] text-sm rounded-md">
                                0
                            </button>
                        </div>


                    </div>
                    <p className="mb-10 text-[#807D7E] text-[18px]">{description}</p>
                    <div className="bg-[#F6F6F6] bg-cover rounded-xl grid grid-cols-3">
                        <div className="p-5 border border-[#BEBCBD] border-t-0 border-l-0">
                            <p className="text-[#807D7E] mb-3">Fabric</p>
                            <p className="text-[#3C4242] mb-3">{otherDetails.Fabric}</p>
                        </div>
                        <div className="p-5 border border-[#BEBCBD] border-t-0 border-l-0">
                            <p className="text-[#807D7E] mb-3">Pattern</p>
                            <p className="text-[#3C4242] mb-3">{otherDetails.Pattern}</p>
                        </div>
                        <div className="p-5 border border-[#BEBCBD]  border-t-0 border-l-0 border-r-0">
                            <p className="text-[#807D7E] mb-3">Fit</p>
                            <p className="text-[#3C4242] mb-3">{otherDetails.Fit}</p>
                        </div>
                        <div className="p-5 border border-[#BEBCBD] border-t-0 border-l-0 border-b-0">
                            <p className="text-[#807D7E] mb-3">Neck</p>
                            <p className="text-[#3C4242] mb-3">{otherDetails.Neck}</p>
                        </div>
                        <div className="p-5 border border-[#BEBCBD] border-t-0 border-l-0 border-b-0">
                            <p className="text-[#807D7E] mb-3">Sleeve</p>
                            <p className="text-[#3C4242] mb-3">{otherDetails.Sleeve}</p>
                        </div>

                        <div className="p-5 border border-[#BEBCBD] border-t-0 border-l-0 border-b-0 border-r-0">
                            <p className="text-[#807D7E] mb-3">Style</p>
                            <p className="text-[#3C4242] mb-3">{otherDetails.Style}</p>
                        </div>

                    </div>
                </div>

                {/*Part 2 */}

            </div>



            {/* Similar Products */}
            <Title text="Similar Products" />

            <div className="px-10 grid grid-cols-4 gap-5 mb-20">
                {
                    productsList.map((item) => <ProductCard key={item.id} item={item} />)
                }
            </div>

            <div>

            </div>



        </div>
    )
}



export default ProductDetails