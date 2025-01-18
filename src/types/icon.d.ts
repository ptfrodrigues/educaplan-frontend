import { iconPaths } from '@/components/ui/Icon/icon-paths'

export type IconName = keyof typeof iconPaths

export interface IconProps {
  name: IconName
  size?: number
  className?: string
}
