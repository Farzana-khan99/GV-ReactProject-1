import React from 'react'
import  HeroSection from './component/HeroSection'

const About = () => {
  const AboutData ={
    name : "about us",
    img : "./images/banner-img.webp"

  }
  return (
    <div>
      <HeroSection {...AboutData}/>
      </div>
  )
}

export default About