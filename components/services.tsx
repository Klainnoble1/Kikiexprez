const services = [
  {
    title: 'Air Freight',
    description: 'Our freight forwarding services guarantee that goods get to their proper destinations on the agreed date.'
  },
  {
    title: 'Sea Freight',
    description: 'We can handle almost any size of shipment, from quantities less than container loads to full loads of containers.'
  },
  {
    title: 'Door-to-Door Delivery',
    description: 'We also engage in moving of consignments from any part of the world to the location of our clients.'
  },
  {
    title: 'Custom Clearance',
    description: 'We are a custom-licensed agency registered under the Corporate Affairs Commission (CAC).'
  }
]

export default function Services() {
  return (
    <section className="bg-blue-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4">
            Our services
          </h2>
          <div className="w-16 h-1 bg-red-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
