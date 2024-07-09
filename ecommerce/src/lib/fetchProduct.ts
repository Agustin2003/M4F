import { IProduct } from "@/types";

export async function fetchProducts(): Promise<IProduct[]> {
    const response = await fetch("https://m4f.onrender.com/products")
    const products = await response.json();
    return products;
    
}

export async function fetchProductById(id: string): Promise <IProduct>{
    const response = await fetch(`https://m4f.onrender.com/products/${id}`)
    const product = await response.json();
    return product;
    
  }