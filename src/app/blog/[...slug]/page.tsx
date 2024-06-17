import { getDaysSinceText, getPost } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) return <div>Post not Found</div>;

  const today = new Date();
  const modificationDate = post.metadata.modificationDate;

  const timeDifference = Math.floor(
    (today.getTime() - modificationDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  return (
    <article>
      <div className="py-12 text-center">
        <h1>{post.metadata.title}</h1>
        {post.metadata.description && <p>{post.metadata.description}</p>}
        <div className="flex gap-4 text-sm text-neutral-400">
          <p>
            Creation Date: {post.metadata.creationDate.toLocaleDateString()}
          </p>
          <p>
            Last updated: {modificationDate.toLocaleDateString()} (
            {getDaysSinceText(timeDifference)})
          </p>
        </div>
      </div>
      <MDXRemote source={post.content} />
    </article>
  );
}
