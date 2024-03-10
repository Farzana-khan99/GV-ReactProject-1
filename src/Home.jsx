import React from 'react'
import HeroSection from './component/HeroSection'

const Home = () => {
  const data ={
    name :"Full Stack",
    title : "Developer",
    img : "./images/banner-img.webp"
  }
  return (
    <div><HeroSection {...data}/></div>
  )
}

export default Home