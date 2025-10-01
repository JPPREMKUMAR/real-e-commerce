import { orderConfirmed } from "../assets/assets"
import { MainContext } from "../context/MainContext"
import { useContext } from "react"


const ConfirmedOrder = () => {

    const { navigate } = useContext(MainContext)


    return (

        <div className=" h-[700px] flex justify-center items-center">

            <div className="flex flex-col justidy-center items-center ">
                <img alt="order confirm" src={orderConfirmed} className="cursor-pointer" onClick={() => navigate("/")} />

            </div>

        </div>
    )
}



export default ConfirmedOrder