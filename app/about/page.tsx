import { 
  SignInButton, 
  UserButton, 
  SignedIn, 
  SignedOut , SignOutButton
} from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
import DarkBtn from "../components/DarkBtn";// Aapka dark mode button
import PostContainer from "../components/PostContainer";
import UserCard from "../components/UserCard"; // Aapka custom component
import { auth } from "@clerk/nextjs/server";


const prisma = new PrismaClient();

export default async function AboutPage() {
  // Database se posts fetch karna
  const { userId } = await  auth()
  const posts = await prisma.post.findMany({
    where : {
      userId : userId || "",
    },
    orderBy : {
      createdAt : 'desc'
    }
  });

  return (
    <main className="p-10">
      {/* --- AUTH SECTION --- */}
      <div className="mb-10 p-5 border rounded-lg bg-gray-50 dark:bg-zinc-900">
        <SignedOut>
          <h2 className="text-xl mb-4">Please login to see the team details</h2>
          <SignInButton mode="modal" forceRedirectUrl="/about">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Login
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-4">
            <UserButton  afterSwitchSessionUrl="/" />
            <p className="font-semibold">Welcome back! You are logged in.</p>
           <SignOutButton redirectUrl="/">
            <button className="bg-red-500 text-white px-2 py-5 rounded-md hover:bg-red-700">Logout</button>
           </SignOutButton>
          </div>
        </SignedIn>
      </div>

      {/* --- PROTECTED CONTENT (Only visible if logged in) --- */}
      <SignedIn>
        <section>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">My Awesome Team</h1>
            <DarkBtn />
          </div>

          <div className="space-y-4">
            <UserCard name="Rahul" age={23} isPremium={true} />
            <UserCard name="Sanjay" age={25} isPremium={false} />
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
            <div className="grid gap-4" >
             <PostContainer posts={posts} />
            </div>
          </div>
        </section>
      </SignedIn>
    </main>
  );
}