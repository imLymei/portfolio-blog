import Link from "next/link";

type BadgeLinkProps = {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function BadgeLink({ children, ...props }: BadgeLinkProps) {
  return (
    <Link
      {...props}
      target="_blank"
      className="inline-flex items-center gap-2 rounded border border-neutral-700 bg-neutral-800 p-1 text-sm"
    >
      {children}
    </Link>
  );
}
