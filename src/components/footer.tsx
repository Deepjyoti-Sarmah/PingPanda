import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { Github, Linkedin, Twitter, } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-brand-25 border-t border-gray-200">
      <MaxWidthWrapper className="py-12 md:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-brand-700">PingPanda</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Real-Time SaaS Insights, Delivered to Your Discord
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <ul className="mt-4 space-y-2">
                {['Feature', 'Pricing', 'Integrations', 'FAQ'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-gray-600 hover:text-brand-600">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-2">
                {['Privacy', 'Terms', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-gray-600 hover:text-brand-600">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} PingPanda. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {[Twitter, Linkedin, Github].map((Icon, index) => (
                <Link key={index} href="#" className="text-gray-400 hover:text-brand-600">
                  <span className="sr-only">{Icon.name}</span>
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>

  )
}

