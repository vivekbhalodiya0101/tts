import { createFileRoute, Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

const lastUpdated = 'July 16, 2026'

export const Route = createFileRoute('/cookie-policy')({
  head: () => ({
    meta: [
      { title: 'Cookie Policy | Tech Tuition System LLP' },
      {
        name: 'description',
        content:
          'Cookie Policy describing how Tech Tuition System LLP uses cookies and similar technologies.',
      },
    ],
  }),
  component: CookiePolicyPage,
})

function PolicyShell({
  title,
  eyebrow,
  children,
}: {
  title: string
  eyebrow: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen bg-background px-6 py-20 text-foreground lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
        >
          ← Back to home
        </Link>
        <div className="mt-8 rounded-[32px] border border-border bg-card p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
          <div className="prose prose-slate mt-8 max-w-none prose-headings:font-heading prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

function CookiePolicyPage() {
  return (
    <PolicyShell title="Cookie Policy" eyebrow="Legal / Cookies">
      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device to help websites
        remember preferences and understand how they are used.
      </p>
      <h2>2. How we use cookies</h2>
      <p>
        We use essential cookies for site functionality and may use analytics
        cookies to measure performance and improve our services.
      </p>
      <h2>3. Managing cookies</h2>
      <p>
        You can manage cookies through your browser settings and through the
        consent choice shown when you first visit the site.
      </p>
      <h2>4. Third-party cookies</h2>
      <p>
        Some embedded services, such as maps or analytics providers, may set
        their own cookies according to their own policies.
      </p>
      <h2>5. Contact</h2>
      <p>
        Questions about cookies can be sent to{' '}
        <a href="mailto:hr@techtuitionsystem.com">hr@techtuitionsystem.com</a>.
      </p>
    </PolicyShell>
  )
}