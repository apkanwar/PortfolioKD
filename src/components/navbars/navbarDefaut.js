import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/outline'


export default function NavbarDefault() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-transparent text-gray-900 fixed w-full z-50">
      <nav className="bg-white mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8 shadow-lg rounded-b-md">
        {/* Logo */}
        <div className="flex lg:flex-1 cursor-pointer">
          <Link href='/' className='flex flex-row gap-2 items-center hover:bg-zinc-200 transition ease-in duration-200 rounded-lg px-4 py-1'>
            <HomeIcon className='h-10 text-bmo-blue cursor-pointer' />
            <h2 className=' font-headings select-none'>Home</h2>
          </Link>
        </div>

        {/* Middle Icons */}
        <Popover className="hidden lg:flex gap-x-6 font-semibold leading-6">
          <img className="h-10 w-auto" src="logo.png" alt="Logo" />
        </Popover>

        {/* Right Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end cursor-default gap-4">
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