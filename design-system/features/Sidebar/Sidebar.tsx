'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { useClassSchedule } from '@/hooks/useClassSchedule'
import { IconName } from '@/types/icon'
import { SidebarContainer, SidebarSection, SidebarItem } from '../../ui/Sidebar'

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

export default function Sidebar() {
  const pathname = usePathname()
  const { isClassActive, error, refetch } = useClassSchedule()

  console.log("Schedule data: ", { isClassActive, error });
  
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
          <SidebarItem 
            key={item.href} 
            {...item} 
            isActive={pathname === item.href}
            showIndicator={item.name === 'Aula' && isClassActive && pathname !== '/class'}
          />
        ))}
      </SidebarSection>
      <SidebarSection>
        {utilityNavItems.map((item) => (
          <SidebarItem 
            key={item.href} 
            {...item} 
            isActive={pathname === item.href}
            showIndicator={false}
          />
        ))}
        <div className="my-2 w-12 mx-auto h-px bg-gray-400" />
        <SidebarItem
          name="Terminar Sessão"
          icon="logout"
          href="/logout"
          isActive={pathname === '/logout'}
          showIndicator={false}
        />
      </SidebarSection>
    </SidebarContainer>
  )
}