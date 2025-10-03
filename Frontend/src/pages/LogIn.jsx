import { google, hide, signIn, twitter } from "../assets/assets"
import { MainContext } from "../context/MainContext"
import { useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import axios from "axios"
const LogIn = () => {

    const { navigate, backendUrl, jwtToken, setJwtToken } = useContext(MainContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isError, setIsError] = useState('')
    const [isHide, setIsHide] = useState(true)



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
        emailValid()
        passwordValid()

        const response = await axios.post(backendUrl + "/api/user/login", { email, password })
        console.log(response.data)

        if (response.data.success === true) {
            setIsError('')
            Cookies.set("jwtToken", response.data.jwtToken, { expires: 30 })
            setJwtToken(response.data.jwtToken)
            navigate("/")


        } else {

            return setIsError(response.data.message)
        }


    }
    useEffect(() => {
        if (jwtToken !== undefined) {

            return navigate("/")
        }
    }, [])


    return (

        <div className="flex w-full">
            <img src={signIn} alt="signUp banner" />
            <form className="p-10  w-full" onSubmit={onSubmitForm}>

                <h1 className="text-[#333333] font-[Core Sans C]   text-[34px]">Sign In</h1>
                <p className="hidden text-[#666666] mb-10">Sign up for free to access to in any of our products</p>

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
                    <label className="text-[#3C4242]" htmlFor="email">Email Address</label>
                    <div className="flex justify-center items-center border border-[#3C4242] rounded-md p-3 gap-2 w-full mt-2">
                        <input id="email" className="w-full outline-none text=[#807D7E] px-2" placeholder="developer@gmail.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    {isEmail && <p className="text-[#EE1D52] mt-1 mb-1">Please Enter Valid Email Address</p>}
                </div>
                <div className="mb-7">
                    <div className="flex justify-between items-center">
                        <label className="text-[#3C4242]" htmlFor="password">Password</label>
                        <button className="flex gap-2 w-[80px] h-[22px] px-1" onClick={() => setIsHide(!isHide)}>
                            <img src={hide} alt="hide" />
                            <p className="text-[#3C4242]">                                {
                                isHide ? 'Show' : 'Hide'
                            }</p>
                        </button>

                    </div>
                    <div className="flex justify-center items-center border border-[#3C4242] rounded-md p-3 gap-2 w-full mt-2">
                        <input id="password" className="w-full outline-none text-[#807D7E] px-2" placeholder="Enter Your Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="flex justify-end">
                        <button className="mt-2 text-[#3C4242] border-b border-[#3C4242]" onClick={() => navigate("/reset-password")}>
                            Forget your password
                        </button>
                    </div>
                    {isPassword && <p className="text-[#EE1D52] mt-1 mb-1">Please Enter Valid Password</p>}
                </div>


                <div>

                    <button type="submit" className="bg-[#8a33fD] text-[#FFFFFF] w-[156px] h-[46px] rounded-md outline-none cursor-pointer mt-5 mb-3" >
                        Sign In
                    </button>
                </div>
                {isError.length > 0 && <p className="text-[#EE1D52] mt-1 mb-1">{isError}</p>}

            </form >
        </div >
    )
}



export default LogIn