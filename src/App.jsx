import { useState,useRef} from 'react'
import reactLogo from './assets/images/icons/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Myprojects, NavBar} from './home/Home'
import { AccrocheSection } from './home/Home'
import { MyPerson } from './home/Home'
import { MyCompetence } from './home/Home'
import { MyFooter } from './home/Footer'
import  {motion, useScroll } from'framer-motion'
export default function MyPorteFolio(){
  return(
    <>
    <NavBar></NavBar>
    <div className='accroche_section'>
    <AccrocheSection ></AccrocheSection>
    </div>
    <div className='my_person' id='m_ps'>
      <MyPerson></MyPerson>
    </div>
    <div className='my_competence' id='m_skls'>
      <MyCompetence></MyCompetence>
    </div>
    <div className='my_projects' id='m_pts'>
      <Myprojects></Myprojects>
    </div>
    <div className='footer' id='m_ct'>
      <MyFooter></MyFooter>
    </div>
    
    </>
  )
}

function ScrollBar(){
  return(
    <>
    <motion.div style={{scaleX: scrollProgress}}>

    </motion.div>
    </>
  )
}