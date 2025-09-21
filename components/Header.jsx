
import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="px-14 xl:py-12  ">
      <div className="container mx-auto flex justify-between items-center gap-8">
        <Link href="/">
       
          <h1 className="text-2xl font-semibold px-12 flex  gap-2 items-center">
  Tulasi
                            <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>

</h1>



        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-green-400 rounded-full">Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
