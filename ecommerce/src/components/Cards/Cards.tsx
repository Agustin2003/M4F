import { IProduct } from "@/types";
import Link from "next/link";
import React from "react"; 
import Card from "../Card/Card"

const Cards = ({products}: { products: IProduct[] }) =>{
    return(
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4  dark:bg-[#e5e7eb]">{products && products?.map((product) =>{
            return(
                <Link key={product.id} href={`/product/${product.id}`}>
                    <div className="max-w-[270px] mt-8 mb-8 ml-8 " >

                    <Card key={product.id} {...product} />
                    </div>
                </Link>
                
            )
        })
        } </div>
    )
}

export default Cards