"use client";
import LikeBtn from "./LikeBtn";
import Link from "next/link";
import { deletePost, toggleLike } from "../action";


export default function PostItem({ post }: { post: any }) {
  // Har post ki apni ALAG state. 
  // Agar Post A click hoga, toh sirf ye state badlegi.
 

  return (
    <div className="p-4 bg-white rounded shadow flex justify-between items-center text-black">
      <div>
        <Link href={`/post/${post.id}`}>
          <h3 className="font-bold text-xl">{post.title}</h3>
        </Link>
        <p className="text-gray-600">{post.content}</p>
      </div>

      <div className="flex gap-3">
        <Link href={`/post/${post.id}/edit`}>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md font-medium transition">
            Edit
          </button>
        </Link>
        <button
          onClick={() => deletePost(Number(post.id))}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Delete
        </button>
        
        {/* Ab ye LikeBtn sirf is post ki state use karega */}
        <LikeBtn onLike={()=>toggleLike(post.id)} likes={post.likes} /> 
      </div>
    </div>
  );
}