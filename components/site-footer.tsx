import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-[#141414] border-t border-[#737373]">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium text-[#fafafa] mb-4">Gaelica Finance</h3>
            <p className="text-sm text-[#9b9b9b] mb-6">
              Premium financial consulting with data-driven insights for businesses of all sizes.
            </p>
            <p className="text-sm text-[#9b9b9b]">São Paulo, Brazil</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[#fafafa] mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Financial Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Investment Strategy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Portfolio Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Risk Assessment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[#fafafa] mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-[#fafafa] mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[#9b9b9b] hover:text-[#c3c3c3] transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#737373] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#9b9b9b]">© 2025 Gaelica Finance. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-[#9b9b9b] hover:text-[#c3c3c3]">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-[#9b9b9b] hover:text-[#c3c3c3]">
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link href="#" className="text-[#9b9b9b] hover:text-[#c3c3c3]">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

