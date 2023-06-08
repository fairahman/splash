import logo from '../assets/Fathom2white.png'
import { Route, Routes, Link } from 'react-router-dom'
import Contact from '../pages/Contact'
import Docs from '../pages/Docs'
import Home from '../pages/Home'

//bg-base-100

 export default function Navbar() {
  return (
    <>
      <div id='navbar' className="  navbar bg-violet-950">
      <div className="flex-1">
       <a className="btn btn-ghost normal-case text-xl" > 
       {/* <button className='text-white text-4xl'>Fathom</button>  */}
       <Link to = '/'> <img className='object-scale-down h-10 w-70' src = {logo}/></Link>
       {/* <img className='object-scale-down h-10 w-70' src = {logo}></img> */}
       </a> 
      </div>
      <div className="flex-none">
        <ul className="text-navFontColor text-2xl menu menu-horizontal px-1">
           <li><Link to = '/'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Home</button></Link></li> 
          <li><Link to = '/docs'> <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Docs</button></Link></li>
          <li><Link to = '/contact'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md">Conctacts</button></Link></li>
        </ul>
      </div>
    </div>
    <Routes>
     {/* <Route path = '/' element ={<Home/>} /> */}
      <Route path = '/docs' element ={<Docs/>} />
      <Route path = '/contact' element = {<Contact/>} />
    </Routes>
    </>
    
  )
  
 }
 