import { useState, useEffect } from "react";
import { getProducts, useGetProductById } from "../services";



/**
 * @description
 * @returns {Array}
 */


export const useGetProducts = () => {
    const [productsData, setProductsData] = useState([])

    useEffect (() => {
        getProducts()
        .then((response) => {
        setProductsData(response.data.products);
        }
        )
        .catch((error) => {
        console.log(error);
        
        });
    }, [] );

    return { productsData }
}

export const useGetProductById = (id) => {

    const [productData, setProductData] = useState({});


    useEffect (() => {
        getProductById(id)
        .then((response) => {
            console.log(response)
        setProductData(response.data);
        }
        )
        .catch((error) => {
        console.log(error);
        
        });
    }, [] );

    return { productData }


}