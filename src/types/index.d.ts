declare module '@heroicons/react/*'
declare module '@headlessui/react'

interface Product {
  id: number
  name: string
  color: string
  size: string
  price: string
  quantity: number
  image: string
}

interface CartItem extends Product {
  quantity: number
}

interface Cart {
  items: CartItem[]
  subtotal: string
  shipping: string
  total: string
}

interface Category {
  name: string
  href: string
}

interface NavigationItem {
  name: string
  href: string
}

interface Navigation {
  categories: Category[]
  pages: NavigationItem[]
} 