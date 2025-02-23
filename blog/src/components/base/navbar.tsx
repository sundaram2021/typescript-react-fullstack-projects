"use client"

import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoonIcon, SunIcon, HomeIcon, BookIcon, PenIcon, LogOutIcon, UserIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import ThemeToggle from "./theme-toggle"
import ProfileDialog from "./profile-dialog"

export default function Navbar() {
    const { setTheme } = useTheme()
    const [isProfileOpen, setIsProfileOpen] = useState(false)

    return (
        <nav className="border-b sticky top-0 bg-background z-10">
            <div className="max-w-screen-xl mx-auto px-4 py-2">
                <div className="flex justify-between items-center mb-4">
                    <Link href="/" className="text-2xl font-bold">
                        Blog
                    </Link>
                    <div className="flex items-center space-x-2">
                        <ThemeToggle />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src="/avatar.png" alt="User" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setIsProfileOpen(true)}>
                                    <UserIcon className="w-4 h-4 mr-2" />
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LogOutIcon className="w-4 h-4 mr-2" />
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="flex justify-center space-x-8 pb-2">
                    <Link href="/" className="hover:text-primary flex items-center">
                        <HomeIcon className="w-5 h-5 mr-1" />
                        <span className="hidden sm:inline">Home</span>
                    </Link>
                    <Link href="/your-blogs" className="hover:text-primary flex items-center">
                        <BookIcon className="w-5 h-5 mr-1" />
                        <span className="hidden sm:inline">Your Blogs</span>
                    </Link>
                    <Link href="/write" className="hover:text-primary flex items-center">
                        <PenIcon className="w-5 h-5 mr-1" />
                        <span className="hidden sm:inline">Write</span>
                    </Link>
                </div>
            </div>
            <ProfileDialog open={isProfileOpen} onOpenChange={setIsProfileOpen} />
        </nav>
    )
}

