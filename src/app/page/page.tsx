'use client'

import { useRouter } from "next/navigation"
import { useState,useRef } from "react"




export default function Manage(){
    const router = useRouter()
    const username:any = useRef()
    const useremail:any = useRef() 
    const user={email:useremail,name:username}
   
    const CreateUserName = async() =>{
        ;
        console.log("********************************");
        console.log(user);
        console.log({email:useremail.current.value,name:username.current.value});
    
        
         await fetch("/api/todos",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify({
                email: useremail.current.value,
                name: username.current.value
            })
          })
         .then(response => response.json())
         .then(data => (console.log(data),router.push('/')))
        .catch(error => console.error(error));
    }

    return(
        <div className="w-full flex flex-col ">
            <h1>this is Manage User page</h1>
            <div className="w-3/5 m-5 flex-col mx-auto p-5 bg-slate-900 justify-center "> 
            <h1 className="font-bold text-2xl"> Create User</h1>
                <div className="flex p-4 space-x-4 justify-center"> 
                    <label htmlFor="name"> Username </label>
                    <input type="text"  id="name" ref={username}></input>
                </div>
                <div className="flex p-4 space-x-4 justify-center"> 
                    <label htmlFor="email" > Email </label>
                    <input type="text" id="email" ref={useremail}></input>
                </div>
                
                <button onClick={CreateUserName} className="w-1/6 p-4 text-sky-900 bg-sky-200 hover:bg-sky-300">Submit</button>

            </div>
            
        </div>
    )
}