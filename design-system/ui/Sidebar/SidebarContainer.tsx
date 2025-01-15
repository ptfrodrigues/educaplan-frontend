import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../utils"
import { sizes } from "../../tokens"

const sidebarVariants = cva(
  "flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all",
  {
    variants: {
      size: {
        sm: `w-[${sizes.sidebar.sm}]`,
        md: `w-[${sizes.sidebar.md}]`,
        lg: `w-[${sizes.sidebar.lg}]`,
      },
      collapsible: {
        true: "group/sidebar",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  collapsed?: boolean
}

export const SidebarContainer = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, size, collapsible, collapsed = false, ...props }, ref) => {
    const [isCollapsed, setIsCollapsed] = React.useState(collapsed)

    React.useEffect(() => {
      setIsCollapsed(collapsed)
    }, [collapsed])

    return (
      <div
        ref={ref}
        className={cn(sidebarVariants({ size, collapsible, className }))}
        data-state={isCollapsed ? "collapsed" : "expanded"}
        {...props}
      />
    )
  }
)
SidebarContainer.displayName = "SidebarContainer"

