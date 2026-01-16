import { prisma } from "../../lib/db";
import { notFound } from "next/navigation";

export default async function SinglePostPage({ params }: { params: any }) {
  // 1. Params ko await karein
  const resolvedParams = await params;
  const postId = parseInt(resolvedParams.id);

  // 2. Database se dhundhein
  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) return <div>Post not found!</div>;

  return (
    <main className="p-10 bg-gray-900 min-h-screen text-white">
      {/* ... aapka baaki ka UI code ... */}
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}