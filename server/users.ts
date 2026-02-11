"use server"

import {auth} from "@/app/lib/auth"
import { error } from "console"
import { success } from "zod"

export const signIn = async (email: string, password: string)=>{
    try{await auth.api.signInEmail({
        body:{
            email,
            password,
        }
    })
    return{
        success: true,
        message: "signed in successfully",
    }

}catch(error){
        const e = error as Error
        return{
        success: false,
        message: e.message || "signed in successfully"
    }
    }
}

export const signUp = async (email: string, password: string, name: string)=>{
    await auth.api.signUpEmail({
        body:{
            email,
            password,
            name,
        }
        
    })
    return{
        success: true,
        message: "signed in successfully",
    }
}