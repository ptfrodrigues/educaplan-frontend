import React from 'react'
import { SidebarProps } from '../../ui/Sidebar'
import Sidebar from '@/components/Sidebar'

interface SidebarLayoutProps extends SidebarProps {
  children: React.ReactNode
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children, ...sidebarProps }) => {
  return (
    <div className="flex h-screen">
      <Sidebar {...sidebarProps} />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}

