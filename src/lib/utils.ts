import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export async function getPosts(): Promise<
  {
    filename: string;
    metadata: {
      title?: string;
      description?: string;
      creationDate: Date;
      modificationDate: Date;
    };
    timeToRead: number;
  }[]
> {
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.slice(-3) === "mdx");

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data: metadata, content } = matter(fileContents);

    const stats = fs.statSync(filePath);

    return {
      filename: filename.split(".")[0],
      metadata: {
        ...metadata,
        creationDate: metadata.creationDate ?? stats.birthtime,
        modificationDate: metadata.modificationDate ?? stats.mtime,
      },
      timeToRead: calculateTimeToRead(content),
    };
  });

  return posts.sort((postOne, postTwo) =>
    postOne.metadata.creationDate >= postTwo.metadata.creationDate ? -1 : 1,
  );
}

export async function getPost(postName: string): Promise<
  | {
      metadata: {
        title?: string;
        description?: string;
        creationDate: Date;
        modificationDate: Date;
      };
      timeToRead: number;
      content: string;
    }
  | undefined
> {
  try {
    const filePath = path.join(postsDirectory, `${postName}.mdx`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data: metadata, content } = matter(fileContents);

    const stats = fs.statSync(filePath);

    return {
      metadata: {
        ...metadata,
        creationDate: metadata.creationDate ?? stats.birthtime,
        modificationDate: metadata.modificationDate ?? stats.mtime,
      },
      content,
      timeToRead: calculateTimeToRead(content),
    };
  } catch {
    return;
  }
}

export function calculateTimeToRead(content: string): number {
  const totalWords = content.trim().split(" ").length;

  return Math.round(totalWords / 50);
}

export function getDaysSinceText(days: number) {
  switch (days) {
    case 0:
      return "today";
    case 1:
      return "yesterday";
    default:
      return `${days} days ago`;
  }
}
