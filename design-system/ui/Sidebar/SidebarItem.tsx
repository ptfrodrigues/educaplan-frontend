import React from 'react'
import { NavLink, NavLinkProps } from '../Navigation/NavLink'
import { Icon } from '../Icon'
import { IconName } from '@/types/icon'
import { spacing } from "../../tokens"

export interface SidebarItemProps extends Omit<NavLinkProps, 'children'> {
  name: string
  icon: IconName
  isActive: boolean
  showIndicator?: boolean
}

export const SidebarItem = React.memo(function SidebarNavItem({ 
  name, 
  icon, 
  isActive = false,
  showIndicator = false,
  ...props
}: SidebarItemProps) {
  return (
    <NavLink active={isActive} {...props}>
      <div className="relative">
        <Icon name={icon} className={`w-[${spacing[5]}] h-[${spacing[5]}]`} />
        {showIndicator && (
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" aria-hidden="true" />
          )}
      </div>
      <p className={`mt-[${spacing[2]}] text-xs w-16 font-medium px-[${spacing[2]}] text-center line-clamp-2`}>{name}</p>
    </NavLink>
  )
})
SidebarItem.displayName = "SidebarItem"
