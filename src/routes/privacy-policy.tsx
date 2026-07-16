import { createFileRoute, Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

const lastUpdated = 'July 16, 2026'

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy | Tech Tuition System LLP' },
      {
        name: 'description',
        content:
          'Privacy Policy for Tech Tuition System LLP covering how we collect, use, and protect information.',
      },
    ],
  }),
  component: PrivacyPolicyPage,
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

function PrivacyPolicyPage() {
  return (
    <PolicyShell title="Privacy Policy" eyebrow="Legal / Privacy">
      <h2>1. Overview</h2>
      <p>
        Tech Tuition System LLP respects your privacy. This policy explains how
        we collect, use, and protect information when you visit our website or
        contact us.
      </p>
      <h2>2. Information we collect</h2>
      <p>
        We may collect information you provide directly, such as your name,
        email address, phone number, and project details when you submit a
        contact form or communicate with us.
      </p>
      <h2>3. How we use information</h2>
      <p>
        We use information to respond to inquiries, provide services, improve
        the website, maintain security, and comply with legal obligations.
      </p>
      <h2>4. Sharing of information</h2>
      <p>
        We do not sell personal information. We may share data with trusted
        service providers who help operate the website or deliver services, or
        when required by law.
      </p>
      <h2>5. Your choices</h2>
      <p>
        You may request access, correction, or deletion of personal data by
        contacting us at hr@techtuitionsystem.com.
      </p>
      <h2>6. Contact</h2>
      <p>
        Questions about this policy can be sent to{' '}
        <a href="mailto:hr@techtuitionsystem.com">hr@techtuitionsystem.com</a>.
      </p>
    </PolicyShell>
  )
}