import {useState, useEffect} from 'react'
import './NavBar.scss'


function NavBar() {
  const [showed, setShowed] = useState(true)
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset
            const visible = scroll > currentScroll || currentScroll < 10
            setShowed(visible)
            setScroll(currentScroll)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scroll])

    const handleNavigation =(divID)=>{
        const div = document.getElementById(divID)
        div.scrollIntoView({ behavior: 'smooth'})
    }
  return (
    <nav className="navbar" style={{ display: showed ? 'flex' : 'none' }}>
            
            <div className="hamburger-menu">
                <input id="menu-icon" type="checkbox" />    
            <label className="menu-button" htmlFor="menu-icon">
                <span/>
            </label>
                <ul className="menu__box">
                    <li> <p className="menu-item" role='presentation' onClick={()=>handleNavigation('about')} onKeyDown={()=>handleNavigation('about')} > About </p></li>
                    <li> <p className="menu-item" role='presentation' onClick={()=>handleNavigation('languages')} onKeyDown={()=>handleNavigation('languages')} > Languages</p></li>
                    <li> <p className="menu-item" role='presentation' onClick={()=>handleNavigation('proyects')} onKeyDown={()=>handleNavigation('proyects')}> Proyects </p></li>
                    <li> <p className="menu-item" role='presentation' onClick={()=>handleNavigation('contact')} onKeyDown={()=>handleNavigation('contact')}> Contact </p></li>
                </ul>
            </div>
        </nav>
  )
}

export default NavBar
