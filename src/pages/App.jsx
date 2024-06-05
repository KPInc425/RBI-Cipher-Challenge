import Hero from '../components/Hero'
import Features from '../components/features/Features'
import Values from '../components/values/Values'
import Tesitmonials from '../components/testimonials/Testimonials'
import CallToAction from '../components/CallToAction'
import GradientTitle from '../components/shared/GradientTitle'
import SectionWrapper from '../components/shared/SectionWrapper'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Values />
      {/* <Tesitmonials /> */}
      <SectionWrapper >
        <div className="flex flex-col gap-8 justify-center items-center text-center">
          <GradientTitle title="See what we have been up to." textSize="lg" fontWeight="medium" />
          <Link to={'/portfolio'} className="bg-primary rounded-lg p-4 text-black">Portfolio</Link>
        </div>
      </SectionWrapper>
      <CallToAction />
    </>
  )
}

export default App
