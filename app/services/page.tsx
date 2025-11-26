import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Our Services - KIKIEXPREZ',
  description: 'Explore our comprehensive cargo delivery and freight forwarding services.',
}

export default function Services() {
  const services = [
    {
      title: 'Freight Forwarding (Air & Sea)',
      description: 'Our comprehensive freight forwarding services guarantee that goods reach their destinations on time and in perfect condition, whether by air or sea. With established relationships ensuring competitive rates and reliable service.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop&q=80'
    },
    {
      title: 'Warehousing and Cargo Handling Management',
      description: 'Professional warehousing and cargo handling services to ensure your goods are stored safely and managed efficiently throughout the logistics process. Our secure facilities provide short-term and long-term storage solutions.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=80'
    },
    {
      title: 'Priority Clearance for Time Sensitive Material',
      description: 'Expedited customs clearance services for urgent shipments that require fast-track processing to meet critical deadlines. We ensure your time-sensitive cargo moves through customs with minimal delays.',
      image: '/customs-clearance-cargo-containers-yard.jpg'
    },
    {
      title: 'Door-to-Door Delivery Services',
      description: 'Complete end-to-end delivery solutions, moving consignments from any part of the world directly to your location. Our door-to-door service ensures your items are in the best hands throughout the entire journey with full tracking and visibility.',
      image: '/delivery-truck-logistics-door-to-door.jpg'
    },
    {
      title: 'Tracking and Delivery Visibility Solution',
      description: 'Real-time tracking and visibility solutions that keep you informed about your shipment status at every stage of the journey. Stay connected with your cargo from pickup to final delivery with our advanced tracking systems.',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&h=800&fit=crop&q=80'
    },
    {
      title: 'Bulk Shipping Discount for High Volume',
      description: 'Competitive pricing and special discounts for high-volume shipments, helping you reduce costs while maintaining service quality. We offer tailored solutions for businesses with regular shipping needs.',
      image: '/cargo-ship-containers-logistics.jpg'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Full-Bleed Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-gray-200">
        <img 
          src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&h=800&fit=crop&q=80"
          alt="Cargo services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-end pb-12 pl-8 md:pl-16">
          <div className="bg-white p-8 md:p-10 max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-2">
              Our Services
            </h1>
            <p className="text-navy-blue text-lg md:text-xl font-semibold italic mb-2">
              Delivering Peace of Mind Worldwide.
            </p>
            <p className="text-gray-700 text-base">Comprehensive logistics solutions tailored to your needs.</p>
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

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { title: 'Freight Forwarding', icon: '🚢' },
              { title: 'Warehousing', icon: '📦' },
              { title: 'Priority Clearance', icon: '⚡' },
              { title: 'Door-to-Door', icon: '🚚' },
              { title: 'Tracking', icon: '📍' },
              { title: 'Bulk Discounts', icon: '💰' }
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
            <a href="/contact" className="inline-block bg-red-accent text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-red-accent/90 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
