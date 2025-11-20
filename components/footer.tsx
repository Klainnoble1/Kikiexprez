export default function Footer() {
  return (
    <footer className="bg-navy-blue text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">KIKIEXPREZ</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              Your trusted logistics and courier partner for international cargo delivery from London to Lagos and beyond.
            </p>
            <p className="text-red-accent text-sm font-semibold italic">
              Delivering Peace of Mind Worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-red-accent mb-6 uppercase text-sm tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/services#air-freight" className="text-gray-300 hover:text-red-accent transition">Air Freight</a></li>
              <li><a href="/services#sea-freight" className="text-gray-300 hover:text-red-accent transition">Sea Freight</a></li>
              <li><a href="/services#door-to-door" className="text-gray-300 hover:text-red-accent transition">Door-to-Door Delivery</a></li>
              <li><a href="/services#custom-clearance" className="text-gray-300 hover:text-red-accent transition">Custom Clearance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-red-accent mb-6 uppercase text-sm tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about" className="text-gray-300 hover:text-red-accent transition">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-red-accent transition">Services</a></li>
              <li><a href="/" className="text-gray-300 hover:text-red-accent transition">Pricing</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-red-accent transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-red-accent mb-6 uppercase text-sm tracking-wide">Contact</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:kikiexprez@gmail.com" className="text-gray-300 hover:text-red-accent transition">
                  kikiexprez@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Phone</p>
                <a href="tel:+447404534284" className="text-gray-300 hover:text-red-accent transition">
                  +44 7404 534284
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; 2025 Kikiexprez Business Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
