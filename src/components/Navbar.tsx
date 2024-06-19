import { ICON_SIZE, NAVBAR_ITENS, SOCIAL_LINKS } from "@/config";
import Link from "next/link";
import { PiArrowArcLeftThin } from "react-icons/pi";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between gap-12 py-6">
      <nav>
        <ul className="flex gap-2 sm:gap-6">
          {NAVBAR_ITENS.map((item) => (
            <li key={`nav-item-${item.title}`}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        className="group absolute left-1/2 flex h-8 w-32 -translate-x-1/2 items-center justify-center"
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
      <div className="relative flex gap-2">
        {SOCIAL_LINKS.map((social, index) => (
          <Link key={`social-link-${index}`} href={social.href}>
            <social.icon />
          </Link>
        ))}
        <div className="absolute -bottom-2 right-0 translate-y-full rotate-6 text-nowrap text-xs text-neutral-500">
          <p>You can also find me here!</p>
          <PiArrowArcLeftThin
            size={ICON_SIZE.SMALL}
            className="absolute right-0 top-0 hidden -translate-y-full translate-x-full rotate-45 md:block"
          />
        </div>
      </div>
    </header>
  );
}
