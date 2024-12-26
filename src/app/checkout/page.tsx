import Image from 'next/image'
import Link from 'next/link'

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

export default function CheckoutPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-light tracking-tight text-gray-900">结账</h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
          <div className="lg:col-span-7">
            {/* Contact information */}
            <section aria-labelledby="contact-info-heading">
              <h2 id="contact-info-heading" className="text-lg font-light text-gray-900">
                联系信息
              </h2>

              <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-light text-gray-700">
                  电子邮箱
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="block w-full rounded-none border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                  />
                </div>
              </div>
            </section>

            {/* Shipping address */}
            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2 id="shipping-heading" className="text-lg font-light text-gray-900">
                收货地址
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-light text-gray-700">
                    姓
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-none border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm font-light text-gray-700">
                    名
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-none border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-light text-gray-700">
                    电话
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      className="block w-full rounded-none border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm font-light text-gray-700">
                    详细地址
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      autoComplete="street-address"
                      className="block w-full rounded-none border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-light text-gray-700">
                    城市
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-none border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="postal-code" className="block text-sm font-light text-gray-700">
                    邮政编码
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="postal-code"
                      name="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-none border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section aria-labelledby="payment-heading" className="mt-10">
              <h2 id="payment-heading" className="text-lg font-light text-gray-900">
                支付方式
              </h2>

              <div className="mt-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="alipay"
                      name="payment-type"
                      type="radio"
                      defaultChecked
                      className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                    />
                    <label htmlFor="alipay" className="ml-3 block text-sm font-light text-gray-700">
                      支付宝
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="wechat"
                      name="payment-type"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                    />
                    <label htmlFor="wechat" className="ml-3 block text-sm font-light text-gray-700">
                      微信支付
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Order summary */}
          <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-light text-gray-900">订单摘要</h2>

            <div className="mt-6 space-y-4">
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-200">
                  {cart.items.map((item) => (
                    <li key={item.id} className="flex items-center space-x-4 py-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="h-16 w-16 rounded-md object-cover object-center"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-light text-gray-900">
                          <Link href={`/products/${item.id}`} className="hover:text-gray-800">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">颜色: {item.color}</p>
                        <p className="mt-1 text-sm text-gray-500">尺寸: {item.size}</p>
                        <p className="mt-1 text-sm text-gray-500">数量: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-light text-gray-900">{item.price}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
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

              <button
                type="submit"
                className="w-full rounded-none border border-transparent bg-black px-4 py-3 text-base font-light text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                确认支付
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 