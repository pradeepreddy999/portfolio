import { Button } from '#/components/ui/button'
import { socialLinks } from '#/lib/resume-data'
import { cn } from '#/lib/utils'

export function SocialLinks({
  size = 24,
  asButtons = false,
  className,
}: {
  size?: number
  asButtons?: boolean
  className?: string
}) {
  return (
    <div className={cn('flex gap-4', className)}>
      {socialLinks.map((social) => {
        const link = (
          <a
            key={asButtons ? undefined : social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              asButtons
                ? undefined
                : 'text-muted-foreground transition-colors hover:text-primary'
            }
          >
            <img
              src={`${import.meta.env.BASE_URL}${social.icon}`}
              alt={social.name}
              width={size}
              height={size}
              className="dark:invert"
            />
          </a>
        )
        return asButtons ? (
          <Button key={social.name} variant="ghost" size="icon" asChild>
            {link}
          </Button>
        ) : (
          link
        )
      })}
    </div>
  )
}
