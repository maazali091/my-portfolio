import { useRef, useState } from 'react'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import './Navbar.css'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

function Navbar() {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0"
  }
  
  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }
  return (
    <div className='navbar'>
        {/* <img src={logo} alt="" /> */}
        <h1 className="logo"><b>Faisal<span>.Amz</span></b> <img src={underline} /></h1>
        <img src={menu_open} onClick={openMenu} className='nav-mob-open' />
        <ul ref={menuRef} className='nav-menu'>
            <img src={menu_close} onClick={closeMenu} className="nav-mob-close" />
            <li><a href='#home' onClick={() => setMenu("home")}>Home</a>{menu === 'home' ? <img src={underline} /> : <></> }</li>
            <li><a href='#about' onClick={() => setMenu("about")}>About me</a>{menu === 'about' ? <img src={underline} /> : <></> }</li>
            <li><a href='#service' onClick={() => setMenu("service")}>Services</a>{menu === 'service' ? <img src={underline} /> : <></> }</li>
            <li><a href='#work' onClick={() => setMenu("work")}>Portfolio</a>{menu === 'work' ? <img src={underline} /> : <></> }</li>
            <li><a href='#contact' onClick={() => setMenu("contact")}>Contact</a>{menu === 'contact' ? <img src={underline} /> : <></> }</li>
        </ul>
        <div className="nav-connect">
            <a href="#contact">Get Free Audit</a> 
        </div>
    </div>
  )
}

export default Navbar
