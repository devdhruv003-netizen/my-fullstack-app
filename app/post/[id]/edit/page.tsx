import { prisma } from "@/app/lib/db";
import {UpdatePost} from "@/app/action";

export default async function EditPostPage({ params }: { params: any }) {
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id: parseInt(id) } });

  if (!post) return <div>Post not found!</div>;

  // Server Action ko ID ke sath bind karna
  const updatePostWithId = UpdatePost.bind(null, post.id);

  return (
    <main className="p-10 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
      <form action={updatePostWithId} className="flex flex-col gap-4 max-w-md">
        <input 
          name="title" 
          defaultValue={post.title} 
          className="p-2 bg-gray-800 border border-gray-700 rounded"
        />
        <textarea 
          name="content" 
          defaultValue={post.content} 
          rows={5}
          className="p-2 bg-gray-800 border border-gray-700 rounded"
        />
        <button type="submit" className=" hover:bg-green-800 p-2 rounded font-bold">
          Save Changes
        </button>
      </form>
    </main>
  );
}