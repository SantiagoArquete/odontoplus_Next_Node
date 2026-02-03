import { headers } from "next/headers"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { EllipsisVertical, Menu, MenuIcon } from "lucide-react"

export function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 z-999 py-4 px-6 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className=" text-3xl font-bold text-zinc-900">
                    Odonto<span className="text-emerald-600 ">Plus</span>
                </Link>

                <nav>
                    <a href="#" className="hidden md:flex items-center">Profissionais</a>
                </nav>

                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button
                            className=""
                            size="icon"
                        >
                            <MenuIcon className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-240px sm:w-300px z-999">
                        <SheetTitle>Menu</SheetTitle>
                        <SheetHeader></SheetHeader>

                        <SheetDescription>Veja nosso links</SheetDescription>

                        <nav>
                            <a href="#">Profissionais</a>
                        </nav>
                    </SheetContent>

                </Sheet>

            </div>
        </header>
    )
}