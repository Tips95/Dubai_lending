import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProgramSection from '@/components/ProgramSection'
import BenefitsSection from '@/components/BenefitsSection'
import ForWhomSection from '@/components/ForWhomSection'
import TariffsSection from '@/components/TariffsSection'
import EarningsSection from '@/components/EarningsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import FloatingParticles from '@/components/FloatingParticles'

export default function Home() {
  return (
    <main className="min-h-screen animated-gradient-bg relative z-10">
      <FloatingParticles />
      <Navigation />
      <Hero />
      <ProgramSection />
      <BenefitsSection />
      <ForWhomSection />
      <TariffsSection />
      <EarningsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

