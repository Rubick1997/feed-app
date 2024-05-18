import { formatDate } from "@/lib/format";
import LikeButton from "../LikeButton";

function Post({
  post,
  action,
}: {
  post: Post;
  action: (postId: number) => void;
}) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{" "}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt ?? "")}
              </time>
            </p>
          </div>
          <div>
            <form
              action={action.bind(null, post.id!)}
              className={post.isLiked ? "liked" : ""}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default Post;
