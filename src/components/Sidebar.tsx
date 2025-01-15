'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { useClassSchedule } from '@/hooks/useClassSchedule'
import Icon from './ui/Icon/icon'
import { IconName } from '@/types/icon'
import { SidebarContainer, SidebarSection, SidebarItem } from '@/components/ui/Sidebar'

type NavItem = {
  name: string
  icon: IconName
  href: string
}

const mainNavItems: NavItem[] = [
  { name: 'Dashboard', icon: 'dashboard', href: '/' },
  { name: 'Gestão Curricular', icon: 'curriculum', href: '/curriculum' },
  { name: 'Calendário', icon: 'calendar', href: '/calendar' },
  { name: 'Cursos', icon: 'courses', href: '/courses' },
  { name: 'Módulos', icon: 'modules', href: '/modules' },
  { name: 'Aula', icon: 'class', href: '/aula' },
]

const utilityNavItems: NavItem[] = [
  { name: 'Área Financeira', icon: 'financial', href: '/financial' },
  { name: 'Relatórios', icon: 'reports', href: '/reports' },
]

const NavItem = React.memo(function NavItem({ 
  name, 
  icon, 
  href, 
  isActive, 
  showClassIndicator 
}: NavItem & { isActive: boolean; showClassIndicator: boolean }) {
  return (
    <SidebarItem href={href} active={isActive}>
      <div className="relative">
        <Icon name={icon} size={24} />
        {showClassIndicator && (
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
        )}
      </div>
      <span className="mt-2 text-xs font-medium px-2 text-center line-clamp-2">{name}</span>
    </SidebarItem>
  )
})

export default function Sidebar() {
  const pathname = usePathname()
  const { isClassActive, error, refetch } = useClassSchedule()


  if (error) {
    return (
      <SidebarContainer>
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-red-500 mb-2">Error: {error}</p>
          <button onClick={refetch} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Retry
          </button>
        </div>
      </SidebarContainer>
    )
  }

  return (
    <SidebarContainer>
      <SidebarSection className="flex-1">
        {mainNavItems.map((item) => (
          <NavItem 
            key={item.href} 
            {...item} 
            isActive={pathname === item.href}
            showClassIndicator={item.name === 'Aula' && isClassActive && pathname !== '/aula'}
          />
        ))}
      </SidebarSection>
      <SidebarSection>
        {utilityNavItems.map((item) => (
          <NavItem 
            key={item.href} 
            {...item} 
            isActive={pathname === item.href}
            showClassIndicator={false}
          />
        ))}
        <div className="my-2 w-12 mx-auto h-px bg-gray-400" />
        <NavItem
          name="Terminar Sessão"
          icon="logout"
          href="/logout"
          isActive={pathname === '/logout'}
          showClassIndicator={false}
        />
      </SidebarSection>
    </SidebarContainer>
  )
}

