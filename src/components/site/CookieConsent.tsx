import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

const COOKIE_CONSENT_KEY = 'tts-cookie-consent'

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const [accepted, setAccepted] = useState(true)

  useEffect(() => {
    setMounted(true)
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY)
    setAccepted(stored === 'accepted')
  }, [])

  const handleAccept = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setAccepted(true)
  }

  if (!mounted || accepted) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9998] p-4 sm:p-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(10,12,30,0.96),rgba(24,28,52,0.94))] p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="max-w-2xl space-y-2">
          <p className="font-heading text-lg font-semibold text-white">
            We use cookies to improve your experience.
          </p>
          <p className="text-sm leading-relaxed text-white/65">
            We use essential cookies for site functionality and optional cookies
            to understand usage and improve our services. You can review the
            details in our{' '}
            <Link to="/cookie-policy" className="text-accent underline-offset-4 hover:underline">
              Cookie Policy
            </Link>
            ,{' '}
            <Link to="/privacy-policy" className="text-accent underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            , and{' '}
            <Link to="/terms-of-service" className="text-accent underline-offset-4 hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Button
            onClick={handleAccept}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black hover:bg-accent/90"
          >
            Accept Cookies
          </Button>
        </div>
      </div>
    </div>
  )
}