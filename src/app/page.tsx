'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const collections = [
  {
    name: '床上用品',
    href: '/categories/bedding',
    imageSrc: '/collection-1.jpg',
    imageAlt: '床上用品系列展示图',
  },
  {
    name: '浴室织品',
    href: '/categories/bath',
    imageSrc: '/collection-2.jpg',
    imageAlt: '浴室织品系列展示图',
  },
  {
    name: '家居装饰',
    href: '/categories/decor',
    imageSrc: '/collection-3.jpg',
    imageAlt: '家居装饰系列展示图',
  },
]

const products = [
  {
    id: 1,
    name: '基础床品四件套',
    href: '/products/1',
    imageSrc: '/product-1.jpg',
    imageAlt: '基础床品四件套展示图',
    price: '¥1,299.00',
    color: '白色',
  },
  {
    id: 2,
    name: '高支贡缎四件套',
    href: '/products/2',
    imageSrc: '/product-2.jpg',
    imageAlt: '高支贡缎四件套展示图',
    price: '¥1,599.00',
    color: '灰色',
  },
  {
    id: 3,
    name: '轻奢提花四件套',
    href: '/products/3',
    imageSrc: '/product-3.jpg',
    imageAlt: '轻奢���花四件套展示图',
    price: '¥1,899.00',
    color: '米色',
  },
  {
    id: 4,
    name: '全棉浴巾',
    href: '/products/4',
    imageSrc: '/product-4.jpg',
    imageAlt: '全棉浴巾展示图',
    price: '¥299.00',
    color: '白色',
  },
]

export default function HomePage() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  priority
                  fill
                  src="/hero.jpg"
                  alt="主页横幅图片"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white mix-blend-multiply" />
              </div>
              <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <h1 className="text-center text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-black">匠心织造</span>
                  <span className="block text-black">品质生活</span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-gray-500 sm:max-w-3xl">
                  以优质面料，精湛工艺，为您打造舒适典雅的家居生活
                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5 sm:space-y-0">
                    <Link
                      href="/products"
                      className="flex items-center justify-center rounded-md border border-transparent bg-black px-4 py-3 text-base font-light text-white shadow-sm hover:bg-gray-800 sm:px-8"
                    >
                      浏览商品
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collection section */}
        <section aria-labelledby="collection-heading" className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
          <h2 id="collection-heading" className="text-2xl font-light tracking-tight text-gray-900">
            系列展示
          </h2>
          <p className="mt-4 text-base text-gray-500">
            每一个系列都经过精心设计，以满足您对品质生活的追求
          </p>

          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {collections.map((collection) => (
              <Link key={collection.name} href={collection.href} className="group block">
                <div
                  aria-hidden="true"
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                  <Image
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-light text-gray-900">{collection.name}</h3>
                <p className="mt-2 text-sm text-gray-500">浏览系列</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured section */}
        <section aria-labelledby="trending-heading" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
          <div className="md:flex md:items-center md:justify-between">
            <h2 id="trending-heading" className="text-2xl font-light tracking-tight text-gray-900">
              热门商品
            </h2>
            <Link
              href="/products"
              className="hidden text-sm font-light text-black hover:text-gray-500 md:block"
            >
              浏览更多
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} href={product.href} className="group relative">
                <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-sm font-light text-gray-900">
                  <span className="absolute inset-0" />
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                <p className="mt-1 text-sm font-light text-gray-900">{product.price}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-sm md:hidden">
            <Link
              href="/products"
              className="font-light text-black hover:text-gray-500"
            >
              浏览更多
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
} 