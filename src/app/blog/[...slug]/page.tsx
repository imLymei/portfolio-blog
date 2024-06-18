import { getDaysSinceText, getPost } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

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
    <article className="space-y-12" id="top">
      <Link
        href={"/blog"}
        className="text-sm text-neutral-400 hover:text-neutral-300"
      >
        {"<-"} See others posts
      </Link>
      <div className="text-center">
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
      <Link
        href="#top"
        className="absolute left-1/2 -translate-x-1/2 text-sm text-neutral-400 hover:text-neutral-300"
      >
        Go to top
      </Link>
    </article>
  );
}
