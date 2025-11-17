import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Pricing from '@/components/pricing'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
