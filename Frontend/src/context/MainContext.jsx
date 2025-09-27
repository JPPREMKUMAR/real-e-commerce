import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'





export const MainContext = createContext()




export const MainContextProvider = (props) => {

    const navigate = useNavigate()


    const value = {

        navigate
    }


    return (

        <MainContext.Provider value={value}>
            {props.children}
        </MainContext.Provider>
    )

}



