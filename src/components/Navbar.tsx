'use client'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    { name: '床上用品', href: '/categories/bedding' },
    { name: '浴室织品', href: '/categories/bath' },
    { name: '家居装饰', href: '/categories/decor' },
  ],
  pages: [
    { name: '关于我们', href: '/about' },
    { name: '联系我们', href: '/contact' },
  ],
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-light">TAOMYST</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">打开菜单</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="text-sm font-light leading-6 text-gray-900 hover:text-gray-600"
            >
              {category.name}
            </Link>
          ))}
          {navigation.pages.map((page) => (
            <Link
              key={page.name}
              href={page.href}
              className="text-sm font-light leading-6 text-gray-900 hover:text-gray-600"
            >
              {page.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <Link href="/account" className="text-sm font-light leading-6 text-gray-900 hover:text-gray-600">
            <UserIcon className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="/cart" className="text-sm font-light leading-6 text-gray-900 hover:text-gray-600">
            <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-light">TAOMYST</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">关闭菜单</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {category.name}
                  </Link>
                ))}
                {navigation.pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/account"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                >
                  账户
                </Link>
                <Link
                  href="/cart"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-light leading-7 text-gray-900 hover:bg-gray-50"
                >
                  购物车
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
} 