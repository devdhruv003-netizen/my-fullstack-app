import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Ye routes bina login ke khulenge
  publicRoutes: ["/", "/about"] 
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};