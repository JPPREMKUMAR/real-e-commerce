import { Arrow } from "../assets/assets"



const CategoryCardItem = (props) => {

    const { item } = props

    const { name, imageUrl } = item
    console.log(imageUrl)

    return (

        <div className="max-w-[270px] cursor-pointer">

            <img src={imageUrl} />

            <div className="flex justify-between p-3 px-2 ">

                <div>
                    <h1 className="text-[#2A2F2F] font-bold font-[Causten] font-semibold text-[16px]" >{name}</h1>
                    <p className="text-[#7F7F7F] text-md font-[Causten] mt-2 mb-2 ">Explore Now!</p>
                </div>
                <div className="flex justify-center items-center">
                    <img alt="arrow Icon" src={Arrow} />
                </div>

            </div>

        </div>
    )

}


export default CategoryCardItem