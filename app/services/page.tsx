import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Our Services - KIKIEXPREZ',
  description: 'Explore our comprehensive cargo delivery and freight forwarding services.',
}

export default function Services() {
  const services = [
    {
      title: 'Air Freight Consolidation',
      description: 'Our freight forwarding services guarantee that goods reach their destinations on time and in perfect condition, with established relationships ensuring competitive rates.',
      image: '/air-freight-cargo-plane-loading.jpg'
    },
    {
      title: 'Sea Freight Services',
      description: 'We offer a full array of global ocean transportation services. From less than container loads to full container loads, we handle shipments of any size with complete documentation management.',
      image: '/cargo-ship-containers-sea-freight.jpg'
    },
    {
      title: 'Door To Door Services',
      description: 'We engage in moving consignments from any part of the world to your location. Our door-to-door service ensures your items are in the best hands throughout the journey.',
      image: '/delivery-truck-logistics-door-to-door.jpg'
    },
    {
      title: 'Custom Clearance',
      description: 'We are a custom-licensed agency registered and fully compliant with all international trade regulations, providing expert documentation and seamless customs handling.',
      image: '/customs-clearance-cargo-containers-yard.jpg'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Full-Bleed Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-gray-200">
        <img 
          src="/cargo-ship-containers-sea-freight-international.jpg"
          alt="Cargo services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-end pb-12 pl-8 md:pl-16">
          <div className="bg-white p-8 md:p-10 max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-2">
              Sea Freight
            </h1>
            <p className="text-gray-700 text-lg font-medium">Keeping our customers satisfied.</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our services are designed to help our clients reduce operating cost, increase revenue and ease daily operational processes. KIKIEXPREZ is committed to delivering innovative solutions that meet and exceed expectations across all logistics operations.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-24">
          {services.map((service, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              {/* Alternate image and text position */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4 text-balance">
                  {service.title}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className={`bg-gray-300 h-80 md:h-96 overflow-hidden rounded-lg ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <img 
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-2 text-center">Our Services</h2>
          <div className="w-12 h-1 bg-red-accent mx-auto mb-12"></div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Sea Freight', icon: '🚢' },
              { title: 'Air Freight', icon: '✈️' },
              { title: 'Door-to-Door', icon: '🚚' },
              { title: 'Custom Clearance', icon: '📋' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-navy-blue">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Comprehensive {item.title.toLowerCase()} solutions tailored to your shipping needs.
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/services" className="inline-block bg-red-accent text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-red-700 transition-colors">
              All Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
