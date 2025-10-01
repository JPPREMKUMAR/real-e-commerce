

import { errorImage } from "../assets/assets"

const Error = () => {


    return (
        <div className="bg-[#F6F6F6] h-[700px] bg-cover flex justify-center items-center">

            <div className="flex flex-col justidy-center items-center ">

                <img src={errorImage} alt="error" />

                <h1 className="text-[34px]">Oops! Page Not found</h1>
                <p className="text-[#807D7E] ">The page you are looking for might have been removed or temporarily unavailable.</p>
                <div className="mt-10 mb-10">
                    <button className="bg-[#8A33FD] text-[#FFFFFF] px-7 py-3 rounded-md">Back to Homepage</button>
                </div>
            </div>
        </div>
    )
}



export default Error