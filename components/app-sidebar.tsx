"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  LayoutDashboardIcon,
  CodeIcon,
  TrophyIcon,
  UsersIcon,
  MessageSquareIcon,
  BookOpenIcon,
  SettingsIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function AppSidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const isActive = (path: string) => {
    return pathname === path
  }

  const mainNavItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboardIcon,
      href: "/",
    },
    {
      title: "Challenges",
      icon: CodeIcon,
      href: "/challenges",
    },
    {
      title: "Leaderboard",
      icon: TrophyIcon,
      href: "/leaderboard",
    },
    {
      title: "Community",
      icon: UsersIcon,
      href: "/community",
    },
    {
      title: "Discussions",
      icon: MessageSquareIcon,
      href: "/discussions",
    },
    {
      title: "Learning Paths",
      icon: BookOpenIcon,
      href: "/learning-paths",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex h-14 items-center px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <CodeIcon className="h-6 w-6 text-primary" />
            <span className="text-lg">Createathon</span>
          </Link>
          <div className="ml-auto md:hidden">
            <SidebarTrigger />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {mainNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={isActive(item.href)} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link href="/settings">
                <SettingsIcon />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex flex-col gap-4">
          <Button
            variant="outline"
            size="sm"
            className="justify-start"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <div className="flex flex-row gap-2 sm:gap-4 lg:gap-6">
                <SunIcon  />
                <p>Light Mode</p>
              </div>
            ) : (
              <div className="flex flex-row gap-2 sm:gap-4 lg:gap-6" >
                <MoonIcon />
                <p>Dark Mode</p>
              </div>
            )}
          </Button>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs text-muted-foreground">john.doe@example.com</span>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

