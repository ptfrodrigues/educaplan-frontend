import React, { forwardRef } from "react"
import { cn } from "../../utils"

interface DataContainerProps {
  children: React.ReactNode
  className?: string
  title?: string
  action?: React.ReactNode
  noPadding?: boolean
  shrink?: boolean
}

export const DataViewContainer = forwardRef<HTMLElement, DataContainerProps>(
  ({ children, className, title, action, noPadding = false, shrink = false }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "flex flex-col flex-1 border border-[#E0E0E0] rounded-lg overflow-hidden",
          shrink && "flex-1 min-w-[250px]", !noPadding && "p-8",
          className
        )}
      >
        {title && (
          <div className={cn("flex justify-between items-center")}>
            <h2 className="ds-card-title">{title}</h2>
            {action}
          </div>
        )}
        <div className={cn(!noPadding && "px-4 pt-4")}>
          {children}
        </div>
      </section>
    )
  }
)

DataViewContainer.displayName = "DataViewContainer"
