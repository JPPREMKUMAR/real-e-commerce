import { useContext, useState, useEffect } from "react"

import { sideIcon, upIcon } from "../assets/assets"
import { MainContext } from "../context/MainContext"

import ProductCard from "../components/ProductCard"


const ProductsList = () => {

    const { colorsList, sizesList, stylesList, pricesList, productsList } = useContext(MainContext)
    //console.log(colorsList)


    const [onPrice, setOnPrice] = useState(false)
    const [onColor, setOnColor] = useState(false)
    const [onSize, setOnSize] = useState(false)
    const [onStyle, setOnStyle] = useState(false)



    const onTogglePrices = () => {

        setOnPrice(!onPrice)

    }

    const onToggleColors = () => {

        setOnColor(!onColor)
    }

    const onToogleSizes = () => {

        setOnSize(!onSize)
    }
    const onToggleStyles = () => {

        setOnStyle(!onStyle)
    }

    return (

        <div className="px-20">

            <div className="w-full mb-20 flex">

                {/*Filters Container */}
                <div className="w-1/4 border border-[#BEBCBD] border-t-0 ">



                    {/* Prices */}

                    <div>

                        <div className="pt-5 pb-5 border border-[#BEBCBD]  border-t-0 border-l-0 border-r-0  px-5 py-3 flex justify-between items-center" onClick={onTogglePrices}>
                            <h1 className="text-[#807D7E] text-[16px] ">Price</h1>
                            <button>
                                {
                                    onPrice ? <img src={upIcon} alt="upIcon" className="cursor-pointer" /> : <img src={sideIcon} alt="sideIcon" className="cursor-pointer" />
                                }
                            </button>
                        </div>
                        <div>

                            {

                                onPrice && <div className="pt-5 pb-5  flex flex-col gap-4 px-5 py-3">

                                    {
                                        pricesList.map((item) => (

                                            <div className="flex gap-x-3 items-center gap-y-4">
                                                <input type="radio" id={item.id} key={item.id} value={item.name} name="price" />
                                                <label className="text-[#8A8989]  text-[14px]" htmlFor={item.id}>{item.name}</label>
                                            </div>

                                        ))

                                    }
                                </div>
                            }

                        </div>



                    </div>




                    {/* COLORS */}
                    <div>
                        <div className="pt-5 pb-5  border border-[#BEBCBD] border-l-0 border-r-0 px-5 py-3 flex justify-between items-center" onClick={onToggleColors}>
                            <h1 className="text-[#807D7E] text-[16px]  ">Colors</h1>
                            <button>
                                {
                                    onColor ? <img src={upIcon} alt="upIcon" className="cursor-pointer" /> : <img src={sideIcon} alt="sideIcon" className="cursor-pointer" />
                                }
                            </button>
                        </div>
                        {


                            onColor && <div className="grid grid-cols-3 gap-5 mt-5  border-[#BEBCBD] pb-5 border-b">
                                {
                                    colorsList.map((item) => (

                                        <div key={item.id} className="flex flex-col items-center justify-center cursor-pointer">
                                            {console.log(item.color)}
                                            <div className={` w-10 h-10 rounded-md mb-2`} style={{ backgroundColor: `${item.color}` }} > </div>
                                            <p className="font-[Causten] text-[12px] font-semibold text-[#8A8989] ">{item.name}</p>

                                        </div>
                                    ))

                                }
                            </div>
                        }

                    </div>

                    {/* SIZES */}

                    <div >
                        <div className=" pt-5 pb-5 border border-[#BEBCBD]  border-t-0 border-l-0 border-r-0  px-5 py-3 flex justify-between items-center" onClick={onToogleSizes}>
                            <h1 className="text-[#807D7E] text-[16px] ">Size</h1>
                            <button>
                                {
                                    onSize ? <img src={upIcon} alt="upIcon" className="cursor-pointer" /> : <img src={sideIcon} alt="sideIcon" className="cursor-pointer" />
                                }
                            </button>
                        </div>
                        {


                            onSize && <div className="grid grid-cols-3 gap-5 mt-5  border-[#BEBCBD] pb-5 border-b">
                                {
                                    sizesList.map((item) => (

                                        <div key={item.id} className="flex flex-col items-center justify-center cursor-pointer">
                                            {console.log(item.color)}
                                            <div className="w-[60px] h-[32px] flex justify-center items-center border border-[#BEBCBD] rounded-md">
                                                <p className="font-[Causten] text-[12px] font-semibold text-[#3C4242] ">{item.name}</p>
                                            </div>
                                        </div>
                                    ))

                                }
                            </div>
                        }
                    </div>


                    {/*Dress Style */}

                    <div>

                        <div className="pt-5 pb-5  border border-[#BEBCBD]  border-t-0 border-l-0 border-r-0  px-5 py-3 flex justify-between items-center" onClick={onToggleStyles}>
                            <h1 className="text-[#807D7E] text-[16px] ">Dress Style</h1>
                            <button>
                                {
                                    onStyle ? <img src={upIcon} alt="upIcon" className="cursor-pointer" /> : <img src={sideIcon} alt="sideIcon" className="cursor-pointer" />
                                }
                            </button>
                        </div>
                        {

                            onStyle && <div className="mt-5 mb-5">
                                {
                                    stylesList.map((item) => (
                                        <div key={item.id} className=" px-5 py-2 flex justify-between">
                                            <p className="text-[#8A8989]  text-[14px]" >{item.name}</p>
                                            <button>
                                                {
                                                    onStyle ? <img src={upIcon} alt="upIcon" className="cursor-pointer" /> : <img src={sideIcon} alt="sideIcon" className="cursor-pointer" />
                                                }
                                            </button>
                                        </div>

                                    ))


                                }


                            </div>
                        }
                    </div>



                </div>

                {/*Cards Container */}
                <div className="w-3/4 p-10">

                    <div>
                        {/* Title Part */}
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h1 className="text-[#3F4646] text-[22px] font-semibold font-[Causten]">Women's Clothing</h1>
                            </div>
                            <div>
                                <h1 className="text-[#3F4646] text-[22px] font-semibold font-[Causten]"><span className="text-[#8A33FD] mr-5"> New </span> Recommended</h1>

                            </div>
                        </div>

                        {/* Products List */}
                        <div className="grid grid-cols-3 gap-5">

                            {
                                productsList.map((item) => (

                                    <ProductCard key={item.id} item={item} />

                                ))


                            }
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}



export default ProductsList