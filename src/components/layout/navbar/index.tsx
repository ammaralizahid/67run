'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import Button from '@/components/layout/button'

const navLinks = [
  { name: 'Startseite', href: '/' },
  { name: 'Laufkalender', href: '/Laufkalender' },
  { name: 'Über uns', href: '/Über uns' },
  { name: 'Vereine', href: '/Vereine' },
  { name: 'Für Veranstalter', href: '/Für-Veranstalter' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white font-poppins shadow-md z-50">
      <div className="max-w-[1366px] mx-auto px-4 md:px-6 flex justify-between items-center min-h-[72px] py-2">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4 h-full">
          {/* LOGO */}
          <div className="relative h-full flex items-center py-2">
            <Image
              src="/navbar/Logo.svg"
              alt="Logo"
              width={72}
              height={72}
              className="object-contain"
            />
          </div>

          {/* DESKTOP / TABLET LINKS */}
          <div className="hidden lg:flex gap-6 ml-6 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-tabText font-dmSans text-sm hover:text-navLinkHover transition px-2 py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* ICONS FOR LG AND ABOVE */}
          <div className="hidden lg:flex items-center gap-4">
            <Image src="/navbar/Search.svg" alt="Search" width={20} height={20} />
            <Image src="/navbar/Vector.svg" alt="Vector" width={20} height={20} />
            <Image src="/navbar/EN.svg" alt="EN" width={20} height={20} />
          </div>

          {/* BUTTONS FOR LG AND ABOVE */}
          <div className="hidden lg:flex gap-2">
            <Button className='w-full min-w-[109px]' variant="primary">Login</Button>
            <Button className='w-full min-w-[109px]' variant="secondary">Registrieren</Button>
          </div>

          {/* MOBILE / TABLET MENU BUTTON */}
          <button
            className="lg:hidden text-black text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET MENU */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-tabText font-dmSans text-base hover:text-navLinkHover transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <div className="flex items-center gap-4 mt-2">
              <Image src="/navbar/Search.svg" alt="Search" width={20} height={20} />
              <Image src="/navbar/Vector.svg" alt="Vector" width={20} height={20} />
              <Image src="/navbar/EN.svg" alt="EN" width={20} height={20} />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="primary">Login</Button>
              <Button variant="secondary">Registrieren</Button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}
