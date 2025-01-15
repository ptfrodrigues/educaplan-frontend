import * as React from "react"
import { cn } from "@/lib/utils"

const SidebarContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col h-screen w-[88px] bg-gray-300 border-r border-gray-200",
      className
    )}
    {...props}
  />
))
SidebarContainer.displayName = "SidebarContainer"

const SidebarSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col", className)}
    {...props}
  />
))
SidebarSection.displayName = "SidebarSection"

const SidebarItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean }
>(({ className, active, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "flex flex-col items-center justify-center w-[88px] h-[88px] transition-colors",
      "hover:bg-gray-200 hover:text-blue-600",
      active ? "bg-gray-100 text-blue-600" : "text-gray-700",
      className
    )}
    {...props}
  />
))
SidebarItem.displayName = "SidebarItem"

export { SidebarContainer, SidebarSection, SidebarItem }

