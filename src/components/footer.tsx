import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"

export const Footer = () => {
  return (
    <footer className="bg-brand-25 border-t border-gray-200">
      <MaxWidthWrapper className="py-12 md:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2">
              <span>PingPanda</span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>

  )
}

