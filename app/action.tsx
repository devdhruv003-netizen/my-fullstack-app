"use server";
import {prisma} from "./lib/db"// Ye wahi file hai jo abhi humne banayi
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
import { use } from "react";


export async function createPost(formData: FormData) {


  try {
  const { userId }  = await auth()

  if(!userId){
    return {success : false, err:"User Not Authenticated"}
  }
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

   if(!title || !content){console.log("title and content required")
    return {success : false, err: "Missing Fields"};
   }

   const newPost = await prisma.post.create({
    data: {
       title,
      content,
      likes : 0,
      userId : userId
      
     },
  });

  console.log("Database As saved Your Dat"+ newPost);

  revalidatePath("/about");
  return{success: true}
} catch(err) {
  console.log("Database Error", err);
  return {success : false, err: "DB Connection Issue"}
}
}

export async function deletePost (id:number){
  const {userId} = await auth()

  if(!userId){
    throw new Error("You must be Logged in to delete post")
  }
  try{
    await prisma.post.delete({
    where : {
      id : id,
      userId : userId
    
    },
  });
  revalidatePath("/about");
  }
  catch(err){
    console.log("Delete Failed Post Not Found");
  }
}

export async function UpdatePost (id:number, formData : FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  

  await prisma.post.update({
    where : {id : id},
    data : {
      title : title,
      content : content
      
    }
  })
  revalidatePath("/about");
  revalidatePath(`post/${id}`);
}

export async function toggleLike(id: number) {
  await prisma.post.update({
    where: { id: id },
    data: {
      likes: { increment: 1 }
    }
  });
  revalidatePath("/about");
}