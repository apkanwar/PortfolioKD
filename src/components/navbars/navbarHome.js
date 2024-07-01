import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import Link from 'next/link'
import { CalculatorIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'


export default function NavbarHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-transparent text-gray-900 fixed w-full z-50">
      <nav className="bg-white mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 shadow-lg rounded-b-md">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href={"#top"}>
            <Image width={64} height={40} src="/logo.png" alt="Logo" />
          </a>
        </div>

        {/* Middle Icons */}
        <Popover.Group className="hidden lg:flex gap-x-6 font-semibold leading-6">
          <a href={"#about"} className="px-3 py-1.5 rounded hover:bg-zinc-200 transition ease-in duration-200">
            About Me
          </a>
          <a href={"#reviews"} className="px-3 py-1.5 rounded hover:bg-zinc-200 transition ease-in duration-200">
            Reviews
          </a>
          <a href={"#contact"} className="px-3 py-1.5 rounded hover:bg-zinc-200 transition ease-in duration-200">
            Contact
          </a>
        </Popover.Group>

        {/* Right Buttons */}
        <div className="flex flex-1 justify-end cursor-default gap-4">
          <Link href='/mortgage-calculator'>
            <CalculatorIcon className='h-10 text-green-600 cursor-pointer hover:text-green-500' />
          </Link>
          <Image width={40} height={40} className="rounded" src="/bmo.png" alt="BMO Logo" />
        </div>
      </nav>
    </header>
  )
}