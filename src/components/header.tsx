import { ModeToggle } from '#/components/mode-toggle'
import { ResumeDownloadButton } from '#/components/resume-download-button'
import { Button } from '#/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '#/components/ui/sheet'
import { cn } from '#/lib/utils'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu } from 'lucide-react'

const navLinks = [
  { name: 'Home', to: '/' as const, hash: undefined },
  { name: 'About', to: '/' as const, hash: 'about' },
  { name: 'Experience', to: '/' as const, hash: 'experience' },
  { name: 'Projects', to: '/' as const, hash: 'projects' },
  { name: 'Blog', to: '/blog' as const, hash: undefined },
  { name: 'Tutorials', to: '/tutorials' as const, hash: undefined },
  { name: 'Contact', to: '/' as const, hash: 'contact' },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/pradeepreddy999',
    icon: 'images/github-mark.svg',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pradeep-reddy-palavalli-70159818b/',
    icon: 'images/linkedin.svg',
  },
]

export default function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <Link to="/" className="font-bold text-xl tracking-tight">
          Pradeep<span className="text-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              hash={link.hash}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === link.to && !link.hash
                  ? 'text-foreground'
                  : 'text-muted-foreground',
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ResumeDownloadButton />
          </div>

          <div className="hidden sm:flex items-center gap-1">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <img
                    src={`${import.meta.env.BASE_URL}${social.icon}`}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="dark:invert"
                  />
                </Button>
              </a>
            ))}
          </div>

          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
              <div className="grid gap-6 px-4 py-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    hash={link.hash}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="mt-2">
                  <ResumeDownloadButton />
                </div>

                <div className="mt-4 flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}${social.icon}`}
                        alt={social.name}
                        width={24}
                        height={24}
                        className="dark:invert"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
