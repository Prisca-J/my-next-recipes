"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChefHat, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { href: "/", label: "Accueil" },
        { href: "/categories", label: "Catégories" },
        { href: "/about", label: "À propos" },
    ]

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <ChefHat size={32} />
                    <span className="text-2xl font-bold">MesRecettes</span>
                </Link>
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-gray-600 hover:text-gray-900 relative group flex items-center",
                                pathname === item.href && "text-gray-900"
                            )}
                        >
              <span
                  className={cn(
                      "absolute -left-4 w-1.5 h-1.5 rounded-full bg-slate-500 transition-all duration-300",
                      pathname === item.href ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  )}
                  aria-hidden="true"
              />
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    <Button className="hidden md:inline-flex">Se connecter</Button>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Ouvrir le menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col space-y-4 mt-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-gray-600 hover:text-gray-900 relative group flex items-center pl-4",
                                            pathname === item.href && "text-gray-900"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                    <span
                        className={cn(
                            "absolute left-0 w-1.5 h-1.5 rounded-full bg-emerald-500 transition-all duration-300",
                            pathname === item.href ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                        )}
                        aria-hidden="true"
                    />
                                        {item.label}
                                    </Link>
                                ))}
                                <Button onClick={() => setIsOpen(false)}>Se connecter</Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}