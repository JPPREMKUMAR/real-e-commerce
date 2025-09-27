import { checkEmailImage, left } from '../assets/assets'




const CheckEmail = () => {


    return (

        <div className='w-full flex'>

            <div>
                <img src={checkEmailImage} alt="check-email-banner" className='max-w-1/2' />
            </div>
            <div className='max-w-1/2 p-10'>

                <div>
                    <h1 className='text-[#333333] text-[34px] font-semibold'>Check Email</h1>
                    <p className='text-[16px] text-[#666666] mt-5' >Please check your email inbox and click on the provided link to reset your password . If you don’t receive email,<span className='text-[#8A33FD] font-semibold cursor-pointer' >Click here to resend</span> </p>
                    <div className='flex items-center gap-2 mt-6'>
                        <img alt="back-icon" src={left} />
                        <p className='text-[#807D7E]' >Back to <span className='text-[#807D7E] border-b border-[#3C4242] cursor-pointer   '>Login</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default CheckEmail