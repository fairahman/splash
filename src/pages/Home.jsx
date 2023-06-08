
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Demo from '../components/Demo'
import Team from '../Team'
import Footer from '../components/Footer'
import { Route, Routes } from 'react-router-dom'
import Docs from './Docs'
import Contact from './Contact'

 function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Demo/>
    <Team/>
    
    <Footer/>
  </>
  )
}
export default function homeWithRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )   
}