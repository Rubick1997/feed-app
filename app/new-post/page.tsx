import { createPost } from "@/actions/posts";
import { PostForm } from "@/components";

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
