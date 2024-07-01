import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'


export default function NavbarDefault() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-transparent text-gray-900 fixed w-full z-50">
      <nav className="bg-white mx-auto flex flex-row-reverse lg:flex-row max-w-7xl items-center justify-between p-5 lg:px-8 shadow-lg rounded-b-md">
        {/* Logo */}
        <div className="flex lg:flex-1 cursor-pointer">
          <Link href='/' className='flex flex-row gap-2 items-center hover:bg-zinc-200 transition ease-in duration-200 rounded-lg px-4 py-1'>
            <HomeIcon className='h-10 text-bmo-blue cursor-pointer' />
            <h2 className=' font-headings select-none'>Home</h2>
          </Link>
        </div>

        {/* Middle Icons */}
        <Popover className="flex gap-x-6 font-semibold leading-6">
          <Image width={64} height={40} src="/logo.png" alt="Logo" />
        </Popover>

        {/* Right Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end cursor-default gap-4">
          <Image width={40} height={40} className="rounded" src="/bmo.png" alt="BMO Logo" />
        </div>
      </nav>
    </header>
  )
}