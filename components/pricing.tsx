const pricingItems = [
  { item: 'Gas Cooker', price: '£90' },
  { item: 'Washing Machine', price: '£90' },
  { item: 'Amazon Bag', price: '£80' },
  { item: 'Ghana Must Go', price: '£50' },
  { item: 'Ghana Must Go (Small)', price: '£40' },
  { item: 'Ghana Must Go (Medium)', price: '£50' },
  { item: 'Ghana Must Go (Big)', price: '£60' },
  { item: 'TV 40"-50"', price: '£120' },
  { item: 'TV 60"-65"', price: '£170' },
  { item: 'TV 75" Above', price: '£220' },
  { item: 'Fridge Table Top', price: '£80' },
  { item: 'Table Mid Fridge', price: '£110' },
  { item: 'Large Fridge', price: '£160' },
  { item: 'Bedside Fridge', price: '£60' },
  { item: 'Flat Deep Freezer Small', price: '£120' },
  { item: 'Flat Deep Freezer Long', price: '£160' },
  { item: 'American Fridge', price: '£300' },
  { item: 'Complete Sofa Set (3+1)', price: '£1120' },
  { item: 'Cars', price: '£750' },
  { item: 'SUV', price: '£950' },
  { item: 'Bus', price: '£1300' }
]

export default function Pricing() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-2">
            PRICING
          </h2>
          <p className="text-gray-600">Our competitive rates for all cargo types</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
          {pricingItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-4 border-b border-gray-200">
              <span className="text-gray-700 font-medium">{item.item}</span>
              <span className="text-red-accent font-bold text-lg">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Air Freight Rates Box */}
        <div className="bg-[#E6F2FF] rounded-lg p-12 border-l-4 border-red-accent max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-navy-blue mb-6 text-center">Air Freight Rates</h3>
          <div className="space-y-4 text-center">
            <div>
              <p className="text-gray-700"><span className="font-bold">London to Lagos:</span> £5.50/kg</p>
            </div>
            <div>
              <p className="text-gray-700"><span className="font-bold">Lagos to London:</span> £3.60/kg or £7,000 (Conventional goods)</p>
            </div>
            <div>
              <p className="text-gray-700"><span className="font-bold">Lagos to London (Protein):</span> £7/kg or Naira equivalent</p>
            </div>
            <p className="text-red-accent font-bold mt-6 pt-4 border-t border-red-accent">All prices are negotiable</p>
          </div>
        </div>
      </div>
    </section>
  )
}
