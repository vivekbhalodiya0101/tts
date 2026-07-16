import { createFileRoute, Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

const lastUpdated = 'July 16, 2026'

export const Route = createFileRoute('/terms-of-service')({
  head: () => ({
    meta: [
      { title: 'Terms of Service | Tech Tuition System LLP' },
      {
        name: 'description',
        content:
          'Terms of Service for Tech Tuition System LLP and use of our website and services.',
      },
    ],
  }),
  component: TermsOfServicePage,
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

function TermsOfServicePage() {
  return (
    <PolicyShell title="Terms of Service" eyebrow="Legal / Terms">
      <h2>1. Acceptance of terms</h2>
      <p>
        By using this website or engaging Tech Tuition System LLP for services,
        you agree to these terms.
      </p>
      <h2>2. Services</h2>
      <p>
        We provide design, development, strategy, and related digital services.
        Project scope, deliverables, and timelines are defined separately for
        each engagement.
      </p>
      <h2>3. Client responsibilities</h2>
      <p>
        Clients are responsible for providing accurate information, necessary
        approvals, and timely feedback to keep projects moving.
      </p>
      <h2>4. Intellectual property</h2>
      <p>
        Unless otherwise agreed in writing, original work produced for a client
        transfers according to the applicable project agreement once payment is
        completed.
      </p>
      <h2>5. Limitation of liability</h2>
      <p>
        To the extent permitted by law, Tech Tuition System LLP will not be
        liable for indirect or consequential damages arising from website use
        or service engagement.
      </p>
      <h2>6. Contact</h2>
      <p>
        Questions about these terms can be sent to{' '}
        <a href="mailto:hr@techtuitionsystem.com">hr@techtuitionsystem.com</a>.
      </p>
    </PolicyShell>
  )
}