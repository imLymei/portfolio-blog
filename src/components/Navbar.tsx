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
        className="absolute left-1/2 -translate-x-1/2"
        href="https://github.com/imLymei"
        target="_blank"
      >
        Lymei
      </Link>
      <div></div>
    </header>
  );
}
