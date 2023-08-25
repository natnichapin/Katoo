import { NextResponse } from 'next/server' 
import { prisma } from '../../(data)/global'

interface user {
    email: string;
    name: string;
  }

//   export cosnt handler = (req,res){
//     console.log("Kello");
    
//     if (req.method === 'POST') {
//       res.status(200).json({ name: 'John Doe' })
//     } else {
//       // Handle any other HTTP method
//     }
//     // if(req.method === 'GET'){
//     //     const result = await prisma.user.findMany()
//     //     res.status(200).json(result)
//     // }else if(req.method ==="POST"){
//     //     const user = await prisma.user.create({
//     //         data:{
//     //             email: req.body.email,
//     //             name: req.body.name,
//     //         }

//     //     })

//     //     return NextResponse.json(user)
        
//     // }
//     }

    
export async function GET(){
    const res = await prisma.user.findMany()
    console.log("---------------------");
    console.log(res);
    
    console.log(typeof res);
    await prisma.$disconnect().
    catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
    
    return NextResponse.json(res)
} 

export async function POST(req:any) {
  console.log("--------------------");
  console.log(req);
  
    const user = await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
        }
    })
    console.log(user);
    
    await prisma.$disconnect().
    catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
    
}