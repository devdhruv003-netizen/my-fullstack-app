"use client"; 
import { useGetPosts } from "../hooks/usePost";
import PostItem from "./PostItem";
import AddPost from "./addPostForm";

export default function PostContainer({ posts }: { posts: any[] }) {
 

  const {post, loading} = useGetPosts();


  if (loading){ return <p>Loading Posts from DataBase</p>}

  return (
    <div className="flex flex-col gap-6">
    <section className="max-w-lg">
      <AddPost />
    </section>
    
    <div className="grid gap-4">
      {posts.map((post : any) => (
         <PostItem  key={post.id} post={post}/>
      ))}
     
    </div>
    
   </div>
  );
}