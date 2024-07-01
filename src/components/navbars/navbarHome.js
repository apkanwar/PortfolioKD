import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import Link from 'next/link'
import { CalculatorIcon } from '@heroicons/react/24/outline'


export default function NavbarHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-transparent text-gray-900 fixed w-full z-50">
      <nav className="bg-white mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 shadow-lg rounded-b-md">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href={"#top"}>
            <img className="h-10 w-auto" src="logo.png" alt="Logo" />
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end cursor-default gap-4">
          <a href='/mortgage-calculator'>
            <CalculatorIcon className='h-10 text-green-600 cursor-pointer hover:text-green-500' />
          </a>
          <img className="h-10 w-auto rounded" src="bmo.png" alt="BMO Logo" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}