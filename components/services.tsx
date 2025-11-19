const services = [
  {
    title: 'Freight Forwarding (Air & Sea)',
    description: 'Our comprehensive freight forwarding services guarantee that goods get to their proper destinations on the agreed date, whether by air or sea.'
  },
  {
    title: 'Warehousing and Cargo Handling Management',
    description: 'Professional warehousing and cargo handling services to ensure your goods are stored safely and managed efficiently throughout the logistics process.'
  },
  {
    title: 'Priority Clearance for Time Sensitive Material',
    description: 'Expedited customs clearance services for urgent shipments that require fast-track processing to meet critical deadlines.'
  },
  {
    title: 'Door-to-Door Delivery Services',
    description: 'Complete end-to-end delivery solutions, moving consignments from any part of the world directly to your location with full tracking and visibility.'
  },
  {
    title: 'Tracking and Delivery Visibility Solution',
    description: 'Real-time tracking and visibility solutions that keep you informed about your shipment status at every stage of the journey.'
  },
  {
    title: 'Bulk Shipping Discount for High Volume',
    description: 'Competitive pricing and special discounts for high-volume shipments, helping you reduce costs while maintaining service quality.'
  }
]

export default function Services() {
  return (
    <section className="bg-[#E6F2FF] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4">
            Our services
          </h2>
          <div className="w-16 h-1 bg-red-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-red-accent rounded-full flex items-center justify-center text-white font-bold mb-4">
                {String.fromCharCode(65 + index)}
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-navy-blue font-bold uppercase text-sm tracking-wide hover:text-red-accent transition border-b-2 border-navy-blue hover:border-red-accent pb-1">
            ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  )
}
