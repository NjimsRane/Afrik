import { NavLink } from 'react-router-dom'
import s from './Menu.module.css'


const menu = [
    {
        id:1,
        name:'home',
        link:'/'
    },
    {
        id:2,
        name:'about us',
        link:'/about'
    },
    {
        id:3,
        name:'decor',
        link:'/decoration'
    },
    {
        id:4,
        name:'fashion',
        link:'/fashion'
    },
    {
        id:5,
        name:'lifestyle',
        link:'/lifestyle'
    },
    {
        id:6,
        name:'contact',
        link:'/contact'
    },
    {
        id:7,
        name:'my account',
        link:'/account'
    }
]

const Menu = () => {
  return (
    <ul className={s.menu}>
       {menu.map(item=>(
         <li key={item.id}>
            <NavLink to={item.link} className={({isActive})=>isActive?s.active:s.normal}>{item.name}</NavLink>
        </li>
       ))}
    </ul>
  )
}

export default Menu