import { useState,useEffect } from "react";

export function useGetPosts () {
    const [post,setPost] = useState([]);
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch("/api/posts")
        .then((res)=> res.json())
        .then((data) => {
            setPost(data);
            setLoading(false);
        })
    },[])

    return {post,loading};
}