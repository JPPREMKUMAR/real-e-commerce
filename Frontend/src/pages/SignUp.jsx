import { google, hide, signUpImage, twitter } from "../assets/assets"
import { MainContext } from "../context/MainContext"
import { useContext, useState, useEffect } from "react"
import axios from "axios"
import Cookies from 'js-cookie'


const SignUp = () => {

    const { backendUrl, navigate, jwtToken, setJwtToken } = useContext(MainContext)
    console.log(backendUrl)
    const [email, setEmail] = useState('')
    const [isEmail, setIsEmail] = useState(false)
    const [password, setPassword] = useState('')
    const [isPassword, setIsPassword] = useState(false)
    const [isHide, setIsHide] = useState(true)
    const [isError, setIsError] = useState('')
    const [name, setName] = useState('')
    const [isName, setIsName] = useState(false)
    const [phone, setPhone] = useState('')
    const [isPhone, setIsPhone] = useState(false)

    const nameValid = () => {
        const checkNameValid = name.length > 4
        //console.log(checkEmailValid)
        if (checkNameValid !== true) {
            return setIsName(true)
        } else {
            return setIsName(false)

        }

    }
    const phoneValid = () => {
        const checkPhoneValid = phone.strip(" ").length === 10
        //console.log(checkEmailValid)
        if (checkPhoneValid !== true) {
            return setIsPhone(true)
        } else {
            return setIsPhone(false)

        }

    }


    const emailValid = () => {
        const checkEmailValid = email.includes("@gmail.com")
        //console.log(checkEmailValid)
        if (checkEmailValid !== true) {
            return setIsEmail(true)
        } else {
            return setIsEmail(false)

        }

    }

    const passwordValid = () => {

        const isPasswordValid = password.length >= 8
        if (isPasswordValid !== true) {

            return setIsPassword(true)
        } else {
            return setIsPassword(false)
        }
    }

    const onSubmitForm = async (event) => {
        event.preventDefault()
        console.log(email, password)
        //Name Valid Or Not 
        nameValid()

        // Phone Valid Or Not
        phoneValid()
        //Email Valid Or Not
        emailValid()
        // Password Valid Or Not
        passwordValid()

        const response = await axios.post(backendUrl + "/api/user/signup", { name, email, password, phone })
        console.log(response.data)
        if (response.data.success === false) {

            setIsError(response.data.message)


        } else {
            setIsError('')
            console.log('Go to Home')
            const jwtToken = response.data.jwtToken
            console.log(jwtToken)

            Cookies.set("jwtToken", jwtToken, { expires: 1 })
            setJwtToken(response.data.jwtToken)
            navigate("/")

        }





    }


    useEffect(() => {
        if (jwtToken !== undefined) {

            return navigate("/")
        }
    }, [])

    return (

        <div className="flex w-full">
            <img src={signUpImage} alt="signUp banner" className="max-w-1/2 h-[956]" />
            <form className="p-10  max-w-1/2" onSubmit={onSubmitForm} >

                <h1 className="text-[#333333] font-[Core Sans C]   text-[34px]">Sign Up</h1>
                <p className="text-[#666666] mb-10">Sign up for free to access to in any of our products</p>

                <div className="mb-10">

                    <div className="flex justify-center items-center border border-[#3C4242] rounded-md p-3 gap-2 w-full mb-5 mt-5">
                        <img src={google} alt="google Icon" />
                        <button className="text-[#8A33FD] text-md">Continue With Google</button>

                    </div>

                    <div className="flex justify-center items-center border border-[#3C4242] rounded-md p-3 gap-2 w-full mb-5 mt-5">
                        <img src={twitter} alt="twitter Icon" />
                        <button className="text-[#8A33FD] text-md">Continue With Twitter</button>
                    </div>
                </div>
                <div className="mb-7">
                    <label className="text-[#3C4242]" htmlFor="name">Your Full Name</label>
                    <div className="flex justify-center items-center border border-[#3C4242] rounded-md p-3 gap-2 w-full mt-2">
                        <input id="name" className="w-full outline-none text=[#807D7E] px-2" placeholder="Enter Your Full Name" value={name} onChange={(event) => setName(event.target.value)} required />
                    </div>
                    {isName && <p className="text-[#EE1D52] mt-1 mb-1">Please Enter Valid Name</p>}

                </div>
                <div className="mb-7">
                    <label className="text-[#3C4242]" htmlFor="phone">Enter Your Phone Number</label>
                    <div className="flex justify-center items-center border border-[#3C4242] rounded-md p-3 gap-2 w-full mt-2">
                        <input id="phone" className="w-full outline-none text=[#807D7E] px-2" placeholder="Enter Your Number" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    {isPhone && <p className="text-[#EE1D52] mt-1 mb-1">Please Enter Valid Phone Number</p>}

                </div>
                <div className="mb-7">
                    <label className="text-[#3C4242]" htmlFor="email">Email Address</label>
                    <div className="flex justify-center items-center border border-[#3C4242] rounded-md p-3 gap-2 w-full mt-2">
                        <input id="email" className="w-full outline-none text=[#807D7E] px-2" placeholder="developer@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    {isEmail && <p className="text-[#EE1D52] mt-1 mb-1">Please Enter Valid Email Address</p>}

                </div>
                <div className="mb-7">
                    <div className="flex justify-between items-center">
                        <label className="text-[#3C4242]" htmlFor="password">Password</label>
                        <button className="flex gap-2 w-[80px] h-[22px] px-1" onClick={() => setIsHide(!isHide)}>
                            <img src={hide} alt="hide" />
                            <p className="text-[#3C4242]">
                                {
                                    isHide ? 'Show' : 'Hide'
                                }
                            </p>
                        </button>
                    </div>
                    <div className="flex justify-center items-center border border-[#3C4242] rounded-md p-3 gap-2 w-full mt-2">
                        <input id="password" type={`${isHide ? 'text' : 'password'}`} className="w-full outline-none text=[#807D7E] px-2" placeholder="Enter Your Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                    </div>
                    <p className="mt-1 mb-1 text-[#807D7E] text-[16px]">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                    {isPassword && <p className="text-[#EE1D52] mt-1 mb-1">Please Enter Valid Password</p>}
                </div>

                <div>
                    <div className="flex gap-x-2 items-center mb-3">
                        <input id="term1" type="checkbox" className="accent-[#3C4242] w-[18px] h-[18px]" checked />
                        <label htmlFor="term1" className="text-[18px] text-[#807D7E]">Agree to our <span className="border-b">Terms of use</span> and <span className="border-b">Privacy Policy</span></label>
                    </div>
                    <div className="flex gap-x-2 items-center mb-3">
                        <input id="term2" type="checkbox" className="accent-[#3C4242] w-[18px] h-[18px]" checked />
                        <label htmlFor="term2" className="text-[18px] text-[#807D7E]">Subscribe to our monthly newsletter</label>
                    </div>
                </div>

                <div>

                    <button type="submit" className="bg-[#8a33fD] text-[#FFFFFF] w-[156px] h-[46px] rounded-md outline-none cursor-pointer mt-10 mb-3">
                        Sign Up
                    </button>



                </div>
                {
                    isError.length > 0 && <p className="text-[#EE1D52] mt-1 mb-1">{isError}</p>
                }

            </form >



        </div >
    )
}



export default SignUp