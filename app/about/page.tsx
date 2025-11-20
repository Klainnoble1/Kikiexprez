import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata = {
  title: 'About Us - KIKIEXPREZ',
  description: 'Learn about KIKIEXPREZ, your trusted logistics and cargo delivery partner.',
}

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Full-Bleed Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-gray-200">
        <img 
          src="/logistics-office-team-professionals.jpg"
          alt="KIKIEXPREZ team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center pl-8 md:pl-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-balance">About Us</h1>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6 text-balance">
              Welcome to Kikiexprez Business Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              Your trusted partner in air and sea freight forwarding, cargo handling, warehousing, and door-to-door delivery between the United Kingdom, Nigeria, and global destinations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                For over 15 years, we have provided reliable, efficient, and customer-focused logistics solutions for businesses across manufacturing, pharmaceuticals, automotive, retail, and general commerce. With fully operational offices in London (UK) and Lagos (Nigeria), we are strategically positioned to bridge international supply chains with speed and professionalism.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                At Kikiexprez, we understand that logistics is more than moving goods—it's about trust, timing, and superior coordination. That is why our operations are built on strong industry expertise, advanced tracking systems, and a customer service philosophy that ensures accountability from pickup to final delivery.
              </p>
            </div>
            <div className="bg-gray-300 h-80 md:h-96 overflow-hidden rounded-lg">
              <img 
                src="/professional-logistics-team-office.jpg"
                alt="Team at office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-2 text-center">What We Do</h2>
          <div className="w-12 h-1 bg-red-accent mx-auto mb-12"></div>
          
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">
                  Freight Forwarding (Air & Sea)
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We offer comprehensive import and export solutions tailored to your cargo type, timelines, and budget. Whether you are shipping raw materials, commercial goods, or personal effects, we ensure smooth handling and transparent communication throughout the journey.
                </p>
              </div>
              <div className="bg-gray-300 h-80 md:h-96 overflow-hidden rounded-lg">
                <img 
                  src="/cargo-plane-loading-freight.jpg"
                  alt="Freight forwarding"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-300 h-80 md:h-96 overflow-hidden rounded-lg order-2 md:order-1">
                <img 
                  src="/logistics-office-team-professionals.jpg"
                  alt="Warehouse solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">
                  Warehouse & Storage Solutions
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Our secure warehousing facilities provide short-term and long-term storage, inventory management, packing, and consolidation services for businesses and individuals.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">
                  Cargo Handling
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  From fragile items to commercial consignments and specialized machinery, our trained professionals ensure your goods are managed with utmost care, compliance, and precision.
                </p>
              </div>
              <div className="bg-gray-300 h-80 md:h-96 overflow-hidden rounded-lg">
                <img 
                  src="/cargo-ship-containers-logistics.jpg"
                  alt="Cargo handling"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-300 h-80 md:h-96 overflow-hidden rounded-lg order-2 md:order-1">
                <img 
                  src="/delivery-truck-logistics-door-to-door.jpg"
                  alt="Door to door delivery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">
                  Door-to-Door Delivery
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We take the stress out of international shipping by offering complete end-to-end logistics—from collection at the origin to delivery at your doorstep in the UK, Nigeria, and beyond.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">
                  General Logistics Services
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Our logistics ecosystem includes customs clearance, documentation processing, insurance support, and partner coordination to ensure fast, efficient, and compliant cargo movement.
                </p>
              </div>
              <div className="bg-gray-300 h-80 md:h-96 overflow-hidden rounded-lg">
                <img 
                  src="/customs-clearance-cargo-containers-yard.jpg"
                  alt="Logistics services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#E6F2FF] p-8 md:p-10 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">Our Mission</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                To deliver reliable, efficient, and innovative logistics solutions that connect businesses across borders and ensure seamless cargo movement through world-class freight forwarding, warehousing, and door-to-door delivery.
              </p>
            </div>
            <div className="bg-[#FFE6E6] p-8 md:p-10 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">Our Vision</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                To become the most trusted global logistics partner by setting the benchmark for excellence in customer service, operational efficiency, and technology-driven solutions.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-2 text-center">Our Values</h2>
            <div className="w-12 h-1 bg-red-accent mx-auto mb-8"></div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {['Reliability', 'Integrity', 'Innovation', 'Excellence', 'Customer Focus', 'Collaboration', 'Safety'].map((value, index) => (
                <div key={index} className="bg-white border-2 border-navy-blue px-6 py-3 rounded-lg">
                  <span className="text-lg font-bold text-navy-blue">{value}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700 mt-8 text-base md:text-lg">
              These values guide our business operations and reflect our commitment to consistently delivering exceptional service to our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-2 text-center">Why Choose Us?</h2>
          <div className="w-12 h-1 bg-red-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">15+ Years of Experience</h3>
              <p className="text-gray-700">Over a decade and a half of expertise in international logistics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">UK & Nigeria Offices</h3>
              <p className="text-gray-700">Fully operational offices in London and Lagos for seamless coordination</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">Transparent Communication</h3>
              <p className="text-gray-700">Clear pricing and excellent communication throughout the process</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">Secure & Compliant</h3>
              <p className="text-gray-700">Secure, efficient, and compliant handling of all cargo types</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">Tailored Solutions</h3>
              <p className="text-gray-700">Customized logistics solutions for businesses and individuals</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">Dedicated Team</h3>
              <p className="text-gray-700">A professional team that prioritizes customer satisfaction</p>
            </div>
          </div>

          <div className="text-center bg-navy-blue text-white p-8 md:p-12 rounded-lg">
            <p className="text-xl md:text-2xl font-bold italic">
              At Kikiexprez Business Solutions, we don't just move cargo—<br />
              we deliver trust, one shipment at a time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
