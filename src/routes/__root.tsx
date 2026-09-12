import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { ThemeProvider } from '#/components/theme-provider'
import Header from '#/components/header'
import { Footer } from '#/components/footer'
import { Button } from '#/components/ui/button'
import { ArrowLeft } from 'lucide-react'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Pradeep Palavalli — Software Engineer' },
      {
        name: 'description',
        content:
          "Pradeep Palavalli's personal portfolio — Software Engineer specializing in .NET Core, React, and SQL Server, building scalable retail and supply chain solutions.",
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${import.meta.env.BASE_URL}favicon.ico`,
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: `${import.meta.env.BASE_URL}favicon.svg`,
      },
    ],
  }),
  component: RootLayout,
  notFoundComponent: NotFoundPage,
  shellComponent: RootDocument,
})

function RootLayout() {
  return (
    <ThemeProvider defaultTheme="system">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <a href="/">
        <Button>
          <ArrowLeft className="mr-2 size-4" />
          Back to Home
        </Button>
      </a>
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script to apply theme class before paint — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('portfolio-theme')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.add(d?'dark':'light')})()`,
          }}
        />
        <HeadContent />
      </head>
      <body className="antialiased">
        {children}
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
