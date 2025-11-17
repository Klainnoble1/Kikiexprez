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

      {/* Company History Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6 text-balance">
                Established Trust in Global Logistics
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                KIKIEXPREZ was established with the sole aim of providing world-class logistics services in the domestic and international arena. With a proven track record spanning years of dedicated service, we have become a trusted name in cargo delivery and freight forwarding.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We employ well-trained staff who are not only competent but also employ advanced innovation and initiative. Over the turn of the decade, we have satisfactorily carried out numerous logistics services across multiple sectors including Oil and Gas, Aviation, Technology, Manufacturing and Government sectors.
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

      {/* Quality Service Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-300 h-80 md:h-96 overflow-hidden rounded-lg order-2 md:order-1">
              <img 
                src="/cargo-plane-loading-freight.jpg"
                alt="Cargo operations"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6 text-balance">
                Quality Service
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                As of today, we pride ourselves with a proven record of excellence in international logistics. We work through too quality and experienced logistics experts to be led to ensuring excellent customer service satisfaction.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                KIKIEXPREZ closely cooperates and maintains strategic alliances with the best international logistics organisations for the purpose of bringing an efficient service delivery to our clients.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-accent font-bold text-lg mt-1">•</span>
                  <span>Oil and Gas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-accent font-bold text-lg mt-1">•</span>
                  <span>Aviation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-accent font-bold text-lg mt-1">•</span>
                  <span>Technology & Telecoms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-accent font-bold text-lg mt-1">•</span>
                  <span>Manufacturing & Agencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-accent font-bold text-lg mt-1">•</span>
                  <span>Government Sector</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-2 text-center">Our Core Values</h2>
          <div className="w-12 h-1 bg-red-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-light text-gray-200 mb-4">01</div>
              <h3 className="text-2xl font-bold text-navy-blue mb-3">Business Values</h3>
              <p className="text-gray-700 leading-relaxed">
                We have progressed consistently, delivering innovative services in our focus areas, meeting international quality standards and the expectations of our valued clients.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-light text-gray-200 mb-4">02</div>
              <h3 className="text-2xl font-bold text-navy-blue mb-3">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide services that meet the needs and requirements of our diverse clients while keeping the cost of such services at competitive prices.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-light text-gray-200 mb-4">03</div>
              <h3 className="text-2xl font-bold text-navy-blue mb-3">Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Integrity in all our business dealings, respect for the law and the rights of individuals on the main themes of our ethical conduct commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-300 h-80 md:h-96 overflow-hidden rounded-lg">
              <img 
                src="/cargo-ship-containers-logistics.jpg"
                alt="Cargo shipping"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6 text-balance">
                Customer Satisfaction
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Customer satisfaction is a vital idea to us as it helps ensure our efficiency through making us maintain the level of competitiveness required in the industry. We make sure that our clients' complaints/queries are handled with the highest level of professionalism and support.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our excellent track record has endeared us to various importers and exporters, safety, efficiency and speed has given us the edge to compete with long established shipping firms and freight forwarding agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
