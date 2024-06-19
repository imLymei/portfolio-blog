export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prose max-w-none lg:prose-lg dark:prose-invert prose-code:rounded prose-code:bg-neutral-800 prose-code:p-1 prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']">
      {children}
    </div>
  );
}
