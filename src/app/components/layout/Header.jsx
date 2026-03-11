import DarkModeToggle from "@/app/components/ui/DarkModeToggle"
import GithubSocial from "@/app/components/ui/header/Github"
import Resume from "../ui/header/Resume"

export default function Header() {
    return (
        <header className="
fixed top-6 left-1/2 -translate-x-1/2
w-[calc(100%-8rem)]
flex items-center justify-between
p-4

backdrop-blur-sm
bg-white/5 dark:bg-black/10

border border-white/10
rounded-xl

z-60
">
            <GithubSocial />
            <Resume />
            <DarkModeToggle />
        </header >
    )
}
