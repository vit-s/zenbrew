'use client'
// local components
import About         from "/components/About.jsx"
import Explore       from "/components/Explore.jsx"
import Hero          from "/components/Hero.jsx"
import Menu          from "/components/Menu.jsx"
import Testimonials  from "/components/Testimonials.jsx"
import OpeningHours  from "/components/OpeningHours.jsx"
// global components
import { useEffect } from "react"

const Home = () => {
  // add locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async() => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      new LocomotiveScroll()
    }
    loadLocomotiveScroll()
  }, [])
  return (
    <div className="h-full overflow-x-hidden">
      <Hero/>
      <Explore/>
      <About/>
      <Menu/>
      <OpeningHours/>
      <Testimonials/>
    </div>
  )
}
export default Home