
import { createNewPasswordImage } from "../assets/assets"



const CreateNewPassword = () => {


    return (

        <div className="w-full flex">
            <div className="max-w-1/2">
                <img src={createNewPasswordImage} />
            </div>
            <form className="max-w-1/2 p-10" >

                <h1 className="text-[#333333] text-[34px] mb-3" >Create New Password</h1>
                <p className="text-[#666666] text-[16px] mb-3">Your new password must be different from previous used passwords.</p>

                <div className="mt-5 mb-5">
                    <p className="text-[#3C4242] text-[18px] mb-3">Password</p>

                    <div className="p-3 border border-[#3C4242] rounded-md">
                        <input placeholder="Enter New Password" type="password" className="outline-none px-2 text-[#333333] " />
                    </div>
                    <p className="text-[#807D7E] text-[16px] mt-3 mb-3" >Must be at least 8 characters.</p>
                </div>

                <div className="mt-5 mb-5">
                    <p className="text-[#3C4242] text-[18px] mb-3">Confirm Password</p>

                    <div className="p-3 border border-[#3C4242] rounded-md">
                        <input placeholder="Enter Confirm Password" type="password" className="outline-none px-2 text-[#333333] " />
                    </div>
                    <p className="text-[#FF0000] text-[16px] mt-3 mb-3" >New Password and confirm new password do not match.</p>
                </div>
                <div className="mt-10">

                    <button className="bg-[#8A33FD] text-[#FFFFFF] w-[167px] h-[54px] rounded-md">
                        Reset Password
                    </button>
                </div>

            </form>

        </div>
    )
}



export default CreateNewPassword