"use client"
import { createPost } from "../action"
import { useRef } from "react"


export default function AddPost () {
const formRef = useRef<HTMLFormElement>(null);
const handleSubmit = async (FormData : FormData) => {
   const result = await createPost(FormData);
    if(result?.success){
        alert("Post Added Successfully");
        formRef.current?.reset();
        return;
    }
    else{
        alert("Database Doesnt get Your Data");
    }
}
 

    return (
        <>
         <form
         ref={formRef}
        action={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col gap-4 text-black"
        >
        <h2 className="border p-1 rounded-md focus:outline-blue-500">Create A Post</h2>

        <input name="title" placeholder="add post" required
        className="border p-2  rounded-md focus:outline-blue-500"
        />

        <textarea name="content"  required
        placeholder="Whats on your mind"
        className="border p-2 rounded-md h-24 focus:outline-blue-500"
        ></textarea>
        
        <button 
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-md transition"
        >
            Post It
        </button>

        </form>
        </>
       
    )
}