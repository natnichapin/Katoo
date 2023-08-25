

// interface people{
//   name: String,
//   age: number
// }
// const p1:people ={
//   name: 'John',age:40 
// } 
'use client'
import { useRef,useEffect,useState } from 'react';
import { prisma } from './(data)/global';
import axios from 'axios';
import Link from 'next/link';




export default interface User {
  id: number,
  email:String,
  name: String;
}
//หลังจากทำ query


export default  function Home() {
   
  // const inputRef:any = useRef();
  const [users, setUsers] = useState<User[]>([])
  const [inputValue, setInputValue] = useState("");
  const fetchInput = async () =>{
  await  fetch("http://localhost:3000/api/todos").then(
    response=>response.json()).then(data => {
      setUsers(data)
    })
  }
  const [count,setCount] = useState(0);

  const deleteFunction = (id:number)=>{
     axios.delete(`http://localhost:3000/api/todos/${id}`)
     .then((res)=> setUsers(users.filter(user => user.id !== id)))
  }



  useEffect(()=>{
    fetchInput()
  },[])

  useEffect(() => {
    // count.current = inputValue.length
    setCount(inputValue.length)    
    // setUsers(users.filter((user:user)=> user.email.includes(inputValue)))
    
    // users.filter((user)=>user.name)
  },[inputValue]);

//ไม่เหมือน vue จะ render ตลอด 
  
  return (
     <div >
  
      <div className='flex  justify-center p-5 bg-slate-200 space-x-4'> 
      <h1 className='text-sky-400 '> Enter name  User</h1>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
     
        <button className='bg-white rounded-lg p-3' onClick={fetchInput}> Click </button>
        </div>
        
        <h1 className='bg-white'>Count: {count}</h1>  
       <ul>
        
        {users.filter((user:User)=> user.email.includes(inputValue)).map((user:User,index) => (
          <li id="user.id" className={`flex  justify-around ${index%2===0?'p-3 bg-sky-300 text-white':'p-3 bg-sky-200 text-black'} `} key={user.id}>
            <div> {user.id} </div>
            <div> {user.email} </div>
            <div> {user.name} </div>
            <div className='space-x-2'>
              <Link href={`/page/${user.id}`} className='bg-sky-500 rounded-xl p-3 text-white'>Edit</Link>
              <button className='bg-rose-400 rounded-xl p-3 text-white' onClick={() => deleteFunction(user.id)} > Delete  </button>
            </div>
          </li>
        ))} 
      </ul>
    
    
      </div>
    )
}
  

  /* <ul>
        
      {allUsers..map((user) => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul> */