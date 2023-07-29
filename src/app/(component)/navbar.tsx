import Link from "next/link"
export default function Navbar(){
    return(
        <div className=" w-full flex p-4 bg-sky-700  text-white font-bold "> 
            <div className=" text-4xl pl-6 "> ♣ </div>
            <ul className="w-full flex space-x-5 justify-end pr-6  "> 
               <Link href="/"> <li> Home</li></Link>  
               <Link href="/page"> <li>Normal </li> </Link> 
               <Link href="/page/about"> <li>About us </li>  </Link>
               <Link href="/page/List"> <li>ListOfPosts </li>  </Link>  
            </ul>
        </div>
    )
}