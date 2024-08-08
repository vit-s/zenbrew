import NavList    from "/components/Nav/NavList.jsx"
import { motion } from "framer-motion"
import React      from 'react'

const heightAnimation = {
  initial: {
    height: 0,
  },
  open:    {
    height:     "85vh",
    transition: {
      duration: .5,
      ease:     [0.75, 0, 0.23, 1],
    },
  },
  close:   {
    height:     0,
    transition: {
      duration: .5,
      ease:     [0.75, 0, 0.23, 1],
    },
  },
}
const Nav             = () => {
  return (
    <motion.nav
      variants={heightAnimation}
      className={'bg-primary overflow-hidden absolute z-[50] -top-full w-full'}
      initial="initial"
      animate={'open'}
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        <NavList/>
      </div>
    </motion.nav>
  )
}
export default Nav
