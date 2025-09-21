



"use client"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"

const links = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/service" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
]

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center mt-15">
        <CiMenuFries className="text-[32px] text-green-400" />
      </SheetTrigger>

      <SheetContent className="w-3/5 bg-black flex flex-col justify-start items-center gap-6 pt-12">
        {/* Logo / Name */}
        <div className="text-center text-2xl mb-6">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-green-400">
              Tulasi<span className="text-green-400"></span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-4">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`text-xl capitalize transition-all ${
                link.path === pathname
                  ? "text-green-400 border-b-2 border-green-400"
                  : "text-green-400 hover:text-green-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
