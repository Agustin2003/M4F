import { fetchProducts } from "@/lib/fetchProduct";
import { IProduct } from "@/types";
import React from "react";  
import Cards from "../Cards/Cards";



const HomeContainer = async () =>{
    const products = await fetchProducts()
    return(
        <div className="">
            <Cards products={products} />
        </div>
    )
}

export default HomeContainer