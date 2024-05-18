import { Posts } from "@/components";
import { getPosts } from "@/lib/posts";

export default async function FeedPage() {
  const posts = await getPosts(2);
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
