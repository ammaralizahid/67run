'use client'

import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'

type AuthModalProps = {
  open: boolean
  onClose: () => void
}

const roles = [
  { title: 'For Runner', signupHref: 'https://67run.com/runner-register/' },
  { title: 'For Team', signupHref: 'https://67run.com/team-registration/' },
  { title: 'For Organizers', signupHref: 'https://67run.com/organize-run-registration/' },
]

export default function AuthModal({ open, onClose }: AuthModalProps) {
  useEffect(() => {
    if (!open) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-[1px] px-4 py-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[900px] min-h-[500px] rounded-[10px] px-[16px] py-[55px] text-white shadow-2xl"
        style={{
          backgroundColor: '#3B5FCC',
          backgroundImage:
            'radial-gradient(circle at top left, #F77CA8 0%, #C06AC2 15%, rgba(59, 95, 204, 0) 58%)',
        }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Choose account type"
      >
        <button
          type="button"
          className="absolute right-4 top-4 text-[#FF7AA0] transition hover:opacity-80"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FiX size={28} />
        </button>

        <div className="mx-auto flex h-full w-full max-w-[1140px] flex-col gap-8">
          <div className="flex justify-center pt-4">
            <img
              src="/footer/Logo.svg"
              width={172}
              height={172}
              alt=""
              className="h-[172px] w-[172px] object-contain bg-transparent"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {roles.map((role) => (
              <div key={role.title} className="flex flex-col items-center gap-4">
                <p className="font-poppins text-[26px] font-medium capitalize text-white">
                  {role.title}
                </p>
                <a
                  href=""
                  className="w-full max-w-[260px] rounded-none bg-[#FB7BA2] px-4 py-2.5 text-center font-dmSans text-[16px] font-medium text-white shadow-sm transition hover:brightness-105"
                >
                  Sign Up
                </a>
                <a
                  href=""
                  className="w-full max-w-[260px] rounded-none border border-white bg-transparent px-4 py-2.5 text-center font-dmSans text-[16px] font-semibold text-white shadow-sm transition hover:brightness-110"
                >
                  Login
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
