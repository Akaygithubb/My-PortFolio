import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = ({menuopen,setmenuopen}) => {
  return (
  <>
    <nav>
        <NavContent setmenuopen={setmenuopen}/>
        
    </nav>
    <button className="navBtn" onClick={()=>setmenuopen(!menuopen)}>
    <AiOutlineMenu/>
  </button>
  </>
  )
}



const NavContent=({setmenuopen})=>(
      <>
      <h2>Akay.</h2>
      <div>
        <a onClick={()=>setmenuopen(false)} href="#home">Home</a>
        <a onClick={()=>setmenuopen(false)} href="#work">Work</a>
        <a onClick={()=>setmenuopen(false)} href="#timeline">Experience</a>
        <a onClick={()=>setmenuopen(false)} href="#services">Services</a>
        <a onClick={()=>setmenuopen(false)} href="#testimonials">Testimonials</a>
        <a onClick={()=>setmenuopen(false)} href="#contact">Contact</a>
      </div>

      <a href="mailto:vivekaikakshwer@gmail.com">
        <button>Email</button>
      </a>



      </>
)

export const HeaderPhone = ({menuopen,setmenuopen}) => {
  return (
    <div className={`navPhone ${menuopen?"navPhonecomes":""}`}>
      <NavContent setmenuopen={setmenuopen} menuopen={menuopen}/>
      </div>
  )
}

export default Header