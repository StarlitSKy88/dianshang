'use client'

import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-light mb-4">关于我们</h3>
            <p className="text-gray-600 text-sm">
              TAOMYST 致力于为您提供高品质的家居面料产品，让您的生活更加优雅舒适。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-light mb-4">客户服务</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-gray-600 text-sm hover:text-gray-900">
                  配送信息
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 text-sm hover:text-gray-900">
                  退换政策
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 text-sm hover:text-gray-900">
                  常见问题
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-light mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">
                邮箱：contact@taomyst.com
              </li>
              <li className="text-gray-600 text-sm">
                电话：400-123-4567
              </li>
              <li className="text-gray-600 text-sm">
                工作时间：周一至周五 9:00-18:00
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-light mb-4">关注我们</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/wechat" className="text-gray-600 text-sm hover:text-gray-900">
                  微信公众号
                </Link>
              </li>
              <li>
                <Link href="/xiaohongshu" className="text-gray-600 text-sm hover:text-gray-900">
                  小红书
                </Link>
              </li>
              <li>
                <Link href="/douyin" className="text-gray-600 text-sm hover:text-gray-900">
                  抖音
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © 2024 TAOMYST. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  )
} 