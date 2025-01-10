import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import TalentList from './components/TalentList'
import Features from './components/Features'
import Issues from './components/Issues'
import SubscriptionPlans from './components/SubscriptionPlans'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Issues />
      <Benefits />
      <TalentList />
      <Features />
      <SubscriptionPlans />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}

