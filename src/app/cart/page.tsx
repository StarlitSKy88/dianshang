import Image from 'next/image'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/20/solid'

const cart = {
  items: [
    {
      id: 1,
      name: '有机棉床单套装',
      color: '白色',
      size: '双人',
      price: '¥899.00',
      quantity: 1,
      image: '/product-1.jpg',
    },
    {
      id: 2,
      name: '亚麻浴巾',
      color: '米色',
      size: '标准',
      price: '¥299.00',
      quantity: 2,
      image: '/product-2.jpg',
    },
  ],
  subtotal: '¥1497.00',
  shipping: '¥0.00',
  total: '¥1497.00',
}

export default function CartPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-light tracking-tight text-gray-900">购物车</h1>

        <form className="mt-12">
          <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
            <div className="lg:col-span-7">
              <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
                {cart.items.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="h-24 w-24 object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-sm">
                            <Link href={`/products/${item.id}`} className="font-light text-gray-700 hover:text-gray-800">
                              {item.name}
                            </Link>
                          </h4>
                          <p className="ml-4 text-sm font-light text-gray-900">{item.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">颜色: {item.color}</p>
                        <p className="mt-1 text-sm text-gray-500">尺寸: {item.size}</p>
                      </div>

                      <div className="mt-4 flex flex-1 items-end justify-between">
                        <div className="flex items-center space-x-2">
                          <label htmlFor={`quantity-${item.id}`} className="sr-only">
                            数量
                          </label>
                          <select
                            id={`quantity-${item.id}`}
                            name={`quantity-${item.id}`}
                            defaultValue={item.quantity}
                            className="rounded-md border border-gray-300 text-left text-base font-light text-gray-700 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                          </select>
                        </div>
                        <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">移除</span>
                          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Order summary */}
            <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
              <h2 className="text-lg font-light text-gray-900">订单摘要</h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">小计</p>
                  <p className="text-sm font-light text-gray-900">{cart.subtotal}</p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-600">运费</p>
                  <p className="text-sm font-light text-gray-900">{cart.shipping}</p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <p className="text-base font-light text-gray-900">总计</p>
                  <p className="text-base font-light text-gray-900">{cart.total}</p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/checkout"
                  className="w-full rounded-none border border-transparent bg-black px-4 py-3 text-base font-light text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  结算
                </Link>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  或{' '}
                  <Link href="/products" className="font-light text-black hover:text-gray-800">
                    继续购物
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
} 