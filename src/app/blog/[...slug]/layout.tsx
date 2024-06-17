export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prose max-w-none lg:prose-lg dark:prose-invert">
      {children}
    </div>
  );
}
