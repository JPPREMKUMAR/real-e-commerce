import { MainContext } from "../context/MainContext"
import { useContext } from "react"
import { Route } from "react-router-dom"

const ProtectedRoute = (props) => {

    const { jwtToken, navigate } = useContext(MainContext)
    if (jwtToken === undefined) {

        return navigate("/login")
    } else {
        return <Route {...props} />
    }

}


export default ProtectedRoute