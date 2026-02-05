"use client"

import { useState } from "react"
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
import { MenuIcon } from "lucide-react"

export function Header() {

    const [isOpen, setIsOpen] = useState(false);


    const navLinks = [
        { href: "#profissionais", label: "Profissionais" },
    ]

    const NavLinks = () => (
        <>
            {navLinks.map((itens) => (
                <Button
                    key={itens.href}
                    asChild
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:text-white text-black "
                >
                    <Link
                        href={itens.href}
                    >
                        {itens.label}
                    </Link>
                </Button>
            ))
            }
        </>
    )

    return (
        <header className="fixed top-0 right-0 left-0 z-999 py-4 px-6 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className=" text-3xl font-bold text-zinc-900">
                    Odonto<span className="text-emerald-600 ">Plus</span>
                </Link>

                <nav className="hidden md:flex items-center">
                    <NavLinks />
                </nav>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button
                            size="icon"
                        >
                            <MenuIcon className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-[250px] sm:w-[300px] z-[9999]">
                        <SheetTitle className="px-5 pt-4 font-bold text-2xl">Menu</SheetTitle>
                        <SheetDescription
                            className="px-5">
                            Navegue pelo site utilizando as opções abaixo:
                        </SheetDescription>

                        <nav className="flex flex-col space-y-4 mt-6 shadow-md">
                            <NavLinks />
                        </nav>
                    </SheetContent>

                </Sheet>

            </div>
        </header>
    )
}