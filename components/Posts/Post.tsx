import { formatDate } from "@/lib/format";
import LikeButton from "../LikeButton";
import Image, { ImageLoaderProps } from "next/image";

const imageLoader = (config: ImageLoaderProps) => {
  const urlSplit = config.src.split("upload/");

  const transformations = `w_200,q_${config.quality}`;
  return `${urlSplit[0]}upload/${transformations}/${urlSplit[1]}`;
};

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
        {post.image && (
          <Image
            loader={imageLoader}
            src={post.image}
            alt={post.title}
            quality={50}
            width={200}
            height={120}
          />
        )}
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
