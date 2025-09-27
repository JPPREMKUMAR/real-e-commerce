
import { verificationImage } from "../assets/assets"



const Verification = () => {


    return (

        <div className="flex w-full">
            <div className="max-w-1/2">
                <img src={verificationImage} alt="verification-image" className="w-[695px]" />
            </div>
            <form className="p-10 max-w-1/2">
                <div className="w-full">

                    <h1 className="text-[#333333] text-[34px]">Verification</h1>
                    <p className="text-[#666666] mt-2 mb-2 text-[14px]">Verify Your Code.</p>

                    <div className="mt-5 mb-5">
                        <p className="text-[#3C4242] text-[15px]">Verification Code.</p>
                        <div className="p-3 mt-3 border w-full rounded-md border-[#666666]">
                            <input className="w-full outline-none text-[#3C4242]" type="text" placeholder="Enter Code" />
                        </div>
                    </div>
                    <div className="mt-10">
                        <button className="w-[167px] h-[54px] text-[16px] text-[#FFFFFF] bg-[#8A33FD] rounded-md shadow-md">Verify Code</button>
                    </div>

                </div>
            </form>
        </div>
    )
}



export default Verification