'use client'

import { Card, CardContent } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {MoreVertical} from "lucide-react"
import Image from 'next/image'

const CardStatVertical = (props: any) => {
  const {
    title,
    stats,
    avatarIcon,
    avatarColor = 'bg-primary',
    trendNumber,
    trend,
    subtitle,
    avatarSkin,
    avatarSize,
    moreOptions,
  } = props

  const defaultOptions = ['Refresh', 'Share', 'Update']

  return (
    <Card className='w-full'>
      <CardContent className='p-4 flex flex-col gap-2'>
        <div className='flex justify-between items-start'>
          <div
            className={cn(
              'rounded-full flex items-center justify-center shadow-sm',
              avatarSize === 'sm' ? 'h-8 w-8' : avatarSize === 'lg' ? 'h-12 w-12' : 'h-10 w-10',
              avatarSkin === 'light' ? 'bg-muted' : avatarColor || 'bg-primary'
            )}
          >
            {avatarIcon?.endsWith('.png') || avatarIcon?.endsWith('.svg') ? (
                <Image src={avatarIcon} alt="icon" width={20} height={20} />
            ) : (
                <i className={cn('text-white', avatarIcon)} />
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              {(moreOptions?.options ?? defaultOptions).map((option:any) => (
                <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className='flex flex-col gap-1'>
          <div className='text-sm font-medium text-foreground'>{title}</div>
          <div className='flex gap-2 items-center flex-wrap'>
            <div className='text-2xl font-semibold text-primary'>{stats}</div>
            <div
              className={cn(
                'text-sm font-medium',
                trend === 'negative' ? 'text-destructive' : 'text-green-600'
              )}
            >
              {`${trend === 'negative' ? '-' : '+'}${trendNumber}`}
            </div>
          </div>
          <div className='text-sm text-muted-foreground'>{subtitle}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardStatVertical
