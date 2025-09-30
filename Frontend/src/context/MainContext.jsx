import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { v6 as uuid } from "uuid"
import { product1, product2, product3, product4, product5, product6, product7, product8, product9, categoryWomen1, categoryWomen2, categoryWomen3, categoryWomen4 } from "../assets/assets"


export const MainContext = createContext()




export const MainContextProvider = (props) => {

    const navigate = useNavigate()

    const colorsList = [
        { id: uuid(), name: "Purpole", color: "#8434E1" },
        { id: uuid(), name: "Black", color: "#252525" },
        { id: uuid(), name: "Red", color: "#F35528" },
        { id: uuid(), name: "Orange", color: "#F16F2B" },
        { id: uuid(), name: "Navy", color: "#345EFF" },
        { id: uuid(), name: "White", color: "#FFFFFF" },
        { id: uuid(), name: "Broom", color: "#D67E3B" },
        { id: uuid(), name: "Green", color: "#48BC4E" },
        { id: uuid(), name: "Yellow", color: "#FDC761" },
        { id: uuid(), name: "Grey", color: "#E4E5E8" },
        { id: uuid(), name: "Pink", color: "#E08D9D" },
        { id: uuid(), name: "Blue", color: "#3FDEFF" },

    ]
    // console.log(colorsList)


    const sizesList = [
        { id: uuid(), name: "XXS" },
        { id: uuid(), name: "XS" },
        { id: uuid(), name: "S" },
        { id: uuid(), name: "M" },
        { id: uuid(), name: "L" },
        { id: uuid(), name: "XL" },
        { id: uuid(), name: "XXL" },
        { id: uuid(), name: "3XL" },
        { id: uuid(), name: "4XL" },

    ]


    const stylesList = [
        { id: uuid(), name: "Classic" },
        { id: uuid(), name: "Casual" },
        { id: uuid(), name: "Business" },
        { id: uuid(), name: "Sport" },
        { id: uuid(), name: "Elegant" },
        { id: uuid(), name: "Formal(evening" },

    ]


    const pricesList = [
        { id: uuid(), name: "below 99" },
        { id: uuid(), name: "above 100 & below 199" },
        { id: uuid(), name: "above 200 & below 499" },
        { id: uuid(), name: "above 500 & below 999" },
        { id: uuid(), name: "above 1000" }


    ]


    const productsList = [
        {
            id: 1,
            name: "Raven Hoodie With Black colored Design",
            brand: "Jhanvi’s Brand",
            description: "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
            imageUrl: product1,
            images: [product1, product2, product3, product4],
            sizes: sizesList,
            colors: colorsList.slice(0, 4),
            otherDetails: { Fabric: "Bio-washed Cotton", Pattern: "Printed", Fit: "Regular-Fit", Neck: "Round-Neck", Sleeve: "Half-Sleeves", Style: "Causual-Wear" },
            price: 599,
            Category: "Women",
            subCategory: "Top"
        },
        {
            id: 2,
            name: "Black Sweatshirt",
            brand: "Jhanvi’s Brand",
            description: "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
            imageUrl: product2,
            images: [product1, product2, product3, product4],
            sizes: sizesList,
            colors: colorsList.slice(0, 4),
            otherDetails: { Fabric: "Bio-washed Cotton", Pattern: "Printed", Fit: "Regular-Fit", Neck: "Round-Neck", Sleeve: "Half-Sleeves", Style: "Causual-Wear" },
            price: 599,
            Category: "Women",
            subCategory: "Top"
        },
        {
            id: 3,
            name: "Black Sweatshirt",
            brand: "Jhanvi’s Brand",
            description: "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
            imageUrl: product3,
            images: [product1, product2, product3, product4],
            sizes: sizesList,
            colors: colorsList.slice(0, 4),
            otherDetails: { Fabric: "Bio-washed Cotton", Pattern: "Printed", Fit: "Regular-Fit", Neck: "Round-Neck", Sleeve: "Half-Sleeves", Style: "Causual-Wear" },
            price: 599,
            Category: "Women",
            subCategory: "Top"
        },
        {
            id: 4,
            name: "Black Sweatshirt",
            brand: "Jhanvi’s Brand",
            description: "100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
            imageUrl: product4,
            images: [product1, product2, product3, product4],
            sizes: sizesList,
            colors: colorsList.slice(0, 4),
            otherDetails: { Fabric: "Bio-washed Cotton", Pattern: "Printed", Fit: "Regular-Fit", Neck: "Round-Neck", Sleeve: "Half-Sleeves", Style: "Causual-Wear" },
            price: 599,
            Category: "Women",
            subCategory: "Top"
        },

    ]



    //console.log(productsList[0])


    const cartsList = [
        { id: uuid(), product: productsList[0], size: "M", color: "Yellow", price: 200, quantity: 1 },
        { id: uuid(), product: productsList[1], size: "L", color: "Yellow", price: 400, quantity: 5 },
        { id: uuid(), product: productsList[2], size: "XL", color: "Yellow", price: 600, quantity: 3 }

    ]



    const value = {

        navigate,
        colorsList,
        sizesList,
        stylesList,
        pricesList,
        productsList,
        cartsList



    }


    return (

        <MainContext.Provider value={value}>
            {props.children}
        </MainContext.Provider>
    )

}



