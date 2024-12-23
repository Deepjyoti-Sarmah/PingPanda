import { cn } from '@/utils'
import { ReactNode } from 'react'

interface MaxWidthWrapperProps {
  classname?: string
  children: ReactNode
}

export const MaxWidthWrapper = ({
  classname,
  children }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn("h-full mx-auto w-full max-w-screen-xl px-2.5 md: px-20", classname)}>
      {children}
    </div>
  )
}

