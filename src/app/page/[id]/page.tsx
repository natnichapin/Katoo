import { Form } from "@/app/(component)/Form";


export default function AboutWithId({params}:any){
    return (
        <div> 
            <h1> This is the about page with {params.id} </h1> 
            <Form id={params.id}/>
        </div>
    )
}