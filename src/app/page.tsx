

// interface people{
//   name: String,
//   age: number
// }
// const p1:people ={
//   name: 'John',age:40 
// } 

import { prisma } from './[data]/global';

async function main() {
  // ... you will write your Prisma Client queries here

  // test 1 : find many from empty list

  const allUsers = await prisma.user.findMany()
  console.log("...");
  
  console.log(allUsers)

  //test 2 : 
  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     posts: {
  //       create: { title: 'Hello World' },
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles' },
  //     },
  //   },
  // })

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // })
  // console.dir(allUsers, { depth: null })
}


//หลังจากทำ query


export default function Home() {
  main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  return (
     <div >
      <h1 className='text-sky-400'> QUIZE APP  </h1>
      
      </div>
    )
}
  

