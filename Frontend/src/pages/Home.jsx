import { shopHero, bannerOne, bannerTwo } from "../assets/assets"
import Title from "../components/Title"

import CategoryCardItem from "../components/CategoryCardItem"



const categoryForMen = [
    { name: "Shirts", imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1759039436/ShirtsCategory_uobjit.png" },
    { name: "Printed T-Shirt", imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1759039432/Rectangle_21_tbx3iw.png" },
    { name: "Plain T-Shirt", imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1759039431/Rectangle_22_1_f6oieu.png" },
    { name: "Polo T-Shirt", imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1759039435/Rectangle_22_2_koxva7.png" },
    { name: "Hoodies & Sweetshirt", imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1759039433/Rectangle_20_bsd1ji.png" },
    { name: "Jeans", imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1759039431/Rectangle_21_1_npwdmy.png" },
    { name: "Activewear", imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1759039432/Rectangle_22_3_k5mobt.png" },
    { name: "Boxers", imageUrl: "https://res.cloudinary.com/dokbp23jt/image/upload/v1759039427/Rectangle_22_4_dtyp6y.png" },


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

            {/* Categories For Men */}
            <div>
                <Title text="" />
                <CategoryCardItem />

            </div>



        </div >
    )
}



export default Home