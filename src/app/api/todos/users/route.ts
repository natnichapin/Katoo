import { data } from "autoprefixer";
import { prisma } from "@/app/(data)/global";
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingMessage, ServerResponse } from "http";

export default function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method === 'GET'){
        const result = async () => await prisma.user.findMany()
        return res.status(200).json(result())
    }else if(req.method ==="POST"){
        const user = async () => await prisma.user.create({
            data:{
                email: req.body.email,
                name: req.body.name,
            }

        })

        return res.status(200).json(user())
        
    }
    return res.status(400).json("Invalid")
}
