import { IProduct,LoginProps,RegisterProps } from "@/types"
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function register(userData: RegisterProps){
    try {
        const res = await fetch(`${apiUrl}/users/register`, {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(res.ok){
            return res.json()
        } else {
            alert("Failed to register")
            throw new Error("Failed to register")
        }
    } catch (error) {
        throw new Error(error)
    }
}

export async function login(userData: LoginProps){
    try {
        const res = await fetch(`${apiUrl}/users/login`, {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(res.ok){
            return res.json()
        } else {
            alert("Failed to login")
            throw new Error("Failed to login")
        }
    } catch (error) {
        throw new Error(error)
    }
}