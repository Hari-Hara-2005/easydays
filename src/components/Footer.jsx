import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const footerSections = [
  {
    title: 'About Whisper',
    links: ['Our History', 'Our Safety Promise']
  },
  {
    title: 'For Girls & Parents',
    links: ['My First Period', 'Period Guide', 'Puberty', 'Tips For Parents']
  },
  {
    title: 'For Women',
    links: ['Cramps & Irregular Bleeding', 'PCOS', 'PMS', 'Tips for a Better Period', 'Vaginal Discharge']
  },
  {
    title: 'Our Products',
    links: ['Sanitary Pads', 'Panty Liners']
  },
  {
    title: 'Popular Reads',
    links: ['Tips for a Healthy Period']
  }
]

export default function Footer() {
    const [expandedSections, setExpandedSections] = useState([])

  const toggleSection = (title) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };
  

  return (
    <footer className="relative bg-[#7D328D] text-white pt-20 pb-8">
      {/* Curved edge
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L1440 120L1440 30C1440 30 1320 0 720 0C120 0 0 30 0 30L0 120Z" fill="#7D328D"/>
        </svg>
      </div> */}

      <div className="container mx-auto px-4">
        {/* Social Media Links */}
        <div className="text-center mb-12">
          <h3 className="text-xl mb-6">Connect with us:</h3>
          <div className="flex justify-center gap-6">
            <a href="#" className="bg-white rounded-full p-2">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6 text-[#7D328D]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" className="bg-white rounded-full p-2">
              <span className="sr-only">YouTube</span>
              <svg className="w-6 h-6 text-[#7D328D]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="bg-white rounded-full p-2">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6 text-[#7D328D]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title} className="border-b md:border-none border-white/20">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full py-4 md:py-0 md:mb-6 text-left font-semibold"
              >
                {section.title}
                <ChevronDown 
                  className={`w-5 h-5 transition-transform md:hidden ${
                    expandedSections.includes(section.title) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <ul className={`space-y-3 overflow-hidden transition-all duration-300 md:block ${
                expandedSections.includes(section.title) ? 'max-h-96 pb-4' : 'max-h-0 md:max-h-none'
              }`}>
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Links */}
        <div className="text-sm text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Your Privacy Choices</a>
            <a href="#" className="hover:underline">Ad Choices</a>
            <a href="#" className="hover:underline">Sitemap</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
          <p>© 2025 Procter & Gamble</p>
          <p className="text-xs">All images are used for illustrative purposes only.</p>
        </div>
      </div>
    </footer>
  )
}