import {
    shopHero, bannerOne, bannerTwo,
    categoryWomen1, categoryWomen2,
    categoryWomen3, categoryWomen4,
    fashionBanner1, fashionBanner2



} from "../assets/assets"


import category1 from "../assets/category1.png"
import category2 from "../assets/category2.png"
import category3 from "../assets/category3.png"
import category4 from "../assets/category4.png"
import category5 from "../assets/category5.png"
import category6 from "../assets/category6.png"
import category7 from "../assets/category7.png"
import category8 from "../assets/category8.png"

import Title from "../components/Title"

import CategoryCardItem from "../components/CategoryCardItem"



const categoryForMen = [
    { name: "Shirts", imageUrl: category8 },
    { name: "Printed T-Shirt", imageUrl: category7 },
    { name: "Plain T-Shirt", imageUrl: category5 },
    { name: "Polo T-Shirt", imageUrl: category6 },
    { name: "Hoodies & Sweetshirt", imageUrl: category3 },
    { name: "Jeans", imageUrl: category4 },
    { name: "Activewear", imageUrl: category1 },
    { name: "Boxers", imageUrl: category2 }
]

const categoryForWomen = [
    { name: "Hoodies & Sweetshirts", imageUrl: categoryWomen1 },
    { name: "Coats & Parkas", imageUrl: categoryWomen2 },
    { name: "Tees & T-Shirts", imageUrl: categoryWomen3 },
    { name: "Boxers", imageUrl: categoryWomen4 },
]



const Home = () => {

    return (

        <div className="min-h-screen">
            <div className="bg-cover w-full h-[716px] flex flex-col justify-center  h-full"
                style={{ backgroundImage: `url(${shopHero})` }}
            >
                <div className="w-[450px] h-[450px] p-[40px] ml-20">
                    <h1 className="text-[28px] text-[#FFFFFF]">T-Shits / Tops</h1>
                    <h1 className="text-[60px] font-bold  text-[#FFFFFF]">Summer Value Pack</h1>
                    <h1 className="text-[28px] text-[#FFFFFF]">Coll / Colorful / Comfy</h1>
                    <button className="w-[250px] h-[60px] bg-[#FFFFFF] text-[#3C4242] font-semibold rounded-md mt-5 mb-5" >Shop Now</button>

                </div>
            </div>

            <div>

                <div className="mt-10 mb-5  flex justify-between px-10">
                    <div className="bg-cover w-[600px] h-[350px] flex flex-col justify-center p-10" style={{ backgroundImage: `url(${bannerOne})` }} >

                        <div className="p-2 px-2 ">

                            <h1 className="text-[#FFFFFF] text-[18px] mt-1 font-semibold">Low Price</h1>
                            <h1 className="text-[#FFFFFF] text-[32px] mt-1 font-[Core Sans C] font-semibold">High Cozines</h1>
                            <h1 className="text-[#FFFFFF] text-[16px]  mt-1">UPTO 50% OFF</h1>
                            <h1 className="border-b text-[#FFFFFF] text-[20px] w-[130px] mt-10 cursor-pointer">Explore Items</h1>
                        </div>

                    </div>

                    <div className="bg-cover w-[600px] h-[350px] flex flex-col justify-center p-10" style={{ backgroundImage: `url(${bannerTwo})` }} >

                        <div className="p-2 px-2 w-[260px]">

                            <h1 className="text-[#FFFFFF] text-[18px] font-semibold mt-1">Beyoung Presents</h1>
                            <h1 className="text-[#FFFFFF] text-[32px] font-[Core Sans C] mt-1 font-semibold">Breezy Summer Style </h1>
                            <h1 className="text-[#FFFFFF] text-[16px] mt-1">UPTO 50% OFF</h1>
                            <h1 className="border-b text-[#FFFFFF] text-[20px] w-[130px] mt-10 cursor-pointer">Explore Items</h1>
                        </div>

                    </div>

                </div>


            </div>


            {/*Fashion Ad Banner  */}


            {/* Categories For Men */}
            <Title text="Categories For Men" />
            <div className="px-10 grid grid-cols-4 gap-x-4 gap-y-4 ">
                {
                    categoryForMen.map((item, index) => (
                        <CategoryCardItem key={index} item={item} />
                    ))
                }
            </div>


            {/*Categories For Women */}
            <Title text={'Categories For Women'} />
            <div className="px-10 grid grid-cols-4 gap-x-10 gap-y-4 ">
                {
                    categoryForWomen.map((item, index) => (

                        <CategoryCardItem key={index} item={item} />
                    ))
                }
            </div>



            {/* Top Brands Banner */}
            <div className="mt-1- mb-10  mx-10 min-h-[200px] bg-[#3C4242] bg-cover rounded-md p-10 ">
                <div className="flex flex-col w-full justify-start items-center">
                    <h1 className="text-[#FFFFFF] text-[30px] font-bold font-[Core Sans C]">Top Brands Deal</h1>
                    <p className="tetx-[22px] text-[#FFFFF]">Up To <span>60%</span> off on brands</p>
                </div>

            </div>

        </div >
    )
}



export default Home