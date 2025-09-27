
import { resetPasswordImage } from '../assets/assets'

const ResetPassword = () => {


    return (

        <div className='flex w-full'>
            <img src={resetPasswordImage} alt='reset-image' className='max-w-1/2' />

            <form className="max-w-1/2 p-10">
                <div className='mt-3 mb-6'>
                    <h1 className="text-[#333333]  font-[Core Sans C] text-[34px]">Reset Your Password</h1>
                    <p className='text-[#676B80] text-[16px] mt-3'>Enter your email and we'll send you a link to reset your password.</p>
                    <p className='text-[#666666] border-b text-[16px] w-[120px] mt-2 '>Please check it.</p>
                </div>
                <div className='mb-8'>
                    <p className="text-[18px] text-[#3C4242]">Email</p>
                    <div className='w-full border border-[#8A33FD] p-3 rounded-md mt-2 mb-2'>
                        <input className="w-full outline-none text-[#8A33FD] text-md" placeholder='Enter Email Address' />

                    </div>
                    <p className='text-[#EE1D52]'>We can not find your email.</p>
                </div>

                <div>
                    <button className='w-[164px] h-[54px] bg-[#8A33FD] text-[#FFFFFF] rounded-md shadow-md text-md'>

                        Send
                    </button>

                    <p className="text-[#3C4242] mt-3">Back to <span className='border-b'>Login</span></p>

                </div>
            </form>
        </div>
    )
}



export default ResetPassword