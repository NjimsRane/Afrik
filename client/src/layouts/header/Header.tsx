import { useState } from 'react'
import {AiOutlineShoppingCart,AiOutlineSearch} from 'react-icons/ai'

import { logo } from '../../assets'
import { Link } from 'react-router-dom'
import { Menu } from '../../components'

import s from './Header.module.css'

const Header = () => {
  const [isOpen, setIsOpen] =useState(false)
  const handleToggle = ()=>{
    setIsOpen(!isOpen)
  }
 
  return (
    <header className={s.header}>
      <Link to='/'><img className={s.logo} src={logo} alt="logo" /></Link>
      {isOpen 
         ? <nav className={s.show}><Menu /></nav> 
         :  <nav > <Menu /></nav>  
      }
      <div className={s.rightHeader}>
        <div style={{display:'flex',alignItems:'center', gap:'1rem'}}>
          <Link to='/' >
            <AiOutlineShoppingCart size={20} color='#637381' />
          </Link>
          <Link to='/'>
            <AiOutlineSearch size={20}  color='#637381'/>
          </Link>
        </div>
        <div className={s.hamburgerMenu} onClick={handleToggle}>
        <span className=
          {`${s.hamburger} ${
            isOpen ? s.toggleMenu : s.hamburger
          }`}
        >
        </span>
        <span className=
          {`${s.hamburger} ${
            isOpen ? s.toggleMenu : s.hamburger
          }`}
        >
        </span>
        <span className=
          {`${s.hamburger} ${
            isOpen ? s.toggleMenu : s.hamburger
          }`}
        >
        </span>
      </div>
      </div>
     
    </header>
  )
}

export default Header