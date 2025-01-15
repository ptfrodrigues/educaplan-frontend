import React from 'react'
import { IconProps } from '@/types/icon'
import { iconPaths } from './icon-paths'

export function Icon({ name, size = 24, className = '' }: IconProps) {
  const path = iconPaths[name] || ''

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d={path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

