"use client"
import axios from "axios"
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import User from "@/app/page";

interface FormProps {
    id: string;
}

export const Form = ({ id }: FormProps) => {
    const router = useRouter()
    const [username,setUsername] = useState<string>(' ')
    const [email,setEmail] = useState<string>(' ')

    const ID_URL = `http://localhost:3000/api/todos/${id}`

    useEffect(() => { getUser() },[])

    const getUser = () => axios.get(ID_URL).then(response => (
        setUsername(response.data.name),setEmail(response.data.email)
    ))
    const handleEdit = () =>{
        if (!username && !email) return
        axios.put(ID_URL,{ name: username, email: email }).then(res=> router.push(`/`))
    }
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)

    return(
    
        <div className="w-full flex flex-col ">
            <div className="w-3/5 m-5 flex-col mx-auto p-5 bg-slate-900 justify-center "> 
            <h1 className="font-bold text-2xl">Edit User page of {id}</h1>
                <div className="flex p-4 space-x-4 justify-center"> 
                    <label htmlFor="name">Username</label>
                    <input type="text"  id="name" value={username || ''} onChange={handleName}/>
                </div>
                <div className="flex p-4 space-x-4 justify-center"> 
                    <label htmlFor="email" >Email</label>
                    <input type="text" id="email" value={email || ''} onChange={handleEmail}/>
                </div>
                
                <button onClick={handleEdit} className="w-1/6 p-4 text-sky-900 bg-sky-200 hover:bg-sky-300">Edit</button>

            </div>
            
        </div>
    )
};
