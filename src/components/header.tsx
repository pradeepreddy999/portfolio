import { ModeToggle } from '#/components/mode-toggle'
import { ResumeDownloadButton } from '#/components/resume-download-button'
import { SocialLinks } from '#/components/social-links'
import { Button } from '#/components/ui/button'
import {
  Sheet,
  SheetClose,
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
  { name: 'Certifications', to: '/' as const, hash: 'certifications' },
  { name: 'Blog', to: '/blog' as const, hash: undefined },
  { name: 'Tutorials', to: '/tutorials' as const, hash: undefined },
  { name: 'Contact', to: '/' as const, hash: 'contact' },
]

export function Header() {
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

          <SocialLinks
            size={20}
            asButtons
            className="hidden items-center gap-1 sm:flex"
          />

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
                  <SheetClose key={link.name} asChild>
                    <Link
                      to={link.to}
                      hash={link.hash}
                      className="hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}

                <div className="mt-2">
                  <ResumeDownloadButton />
                </div>

                <SocialLinks className="mt-4" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
