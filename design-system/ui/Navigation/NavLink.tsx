import React, { forwardRef } from 'react'
import { cn } from "../../utils"

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
active?: boolean
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
({ className, active, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "flex flex-col items-center justify-center p-4 rounded-md transition-colors text-base",
      "hover:bg-hover",
      active ? "bg-active text-activeForground" : "text-foreground",
      className
    )}
    {...props}
  >
    {children}
  </a>
)
)
NavLink.displayName = "NavLink"

