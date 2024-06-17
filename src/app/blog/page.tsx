import { getPosts } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default async function page() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <Link
          key={`post-${post.filename}`}
          className="rounded p-2 hover:bg-neutral-800"
          href={`blog/${post.filename}`}
        >
          <p className="text-2xl font-bold underline">{post.metadata.title}</p>
          {post.metadata.description && (
            <p className="text-neutral-300">{post.metadata.description}</p>
          )}
          <div className="flex gap-4 text-sm">
            <p className="text-neutral-400">
              {post.metadata.creationDate.toLocaleDateString()}
            </p>
            <p className="text-neutral-500">{post.timeToRead} min read</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
