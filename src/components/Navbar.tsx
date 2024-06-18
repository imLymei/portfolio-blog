import { NAVBAR_ITENS } from "@/config";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between gap-12 py-6">
      <nav>
        <ul className="flex gap-6">
          {NAVBAR_ITENS.map((item) => (
            <li key={`nav-item-${item.title}`}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        className="group absolute left-1/2 flex h-8 w-52 -translate-x-1/2 items-center justify-center"
        href="https://github.com/imLymei"
        target="_blank"
      >
        <p className="absolute block text-nowrap transition group-hover:-translate-y-full group-hover:opacity-0">
          Felipe Cardoso
        </p>
        <p className="absolute translate-y-full text-nowrap opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
          Lymei
        </p>
      </Link>
      <div></div>
    </header>
  );
}
