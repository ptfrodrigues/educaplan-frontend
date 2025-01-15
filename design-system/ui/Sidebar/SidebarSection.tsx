import React from 'react'
import { cn } from "../../utils"
import { spacing } from "../../tokens"

export const SidebarSection = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(`flex flex-col py-[${spacing[3]}]`, className)}
      {...props}
    />
  )
)
SidebarSection.displayName = "SidebarSection"



