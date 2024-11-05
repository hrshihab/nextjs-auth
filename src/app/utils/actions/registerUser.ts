'use server'

import { UserData } from "@/app/register/page"

export const registerUser = async (formData: UserData) => {
    //console.log(process.env.BACKEND_URL)
   const res = await fetch(`${process.env.BACKEND_URL}/register`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
    cache: 'no-store',
   })
   const data = await res.json()
   return data
}
