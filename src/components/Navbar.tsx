import { NAVBAR_ITENS } from "@/config";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex gap-12 py-6">
      <p>Lymei</p>
      <nav>
        <ul className="flex gap-6">
          {NAVBAR_ITENS.map((item) => (
            <li key={`nav-item-${item.title}`}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
