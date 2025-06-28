import { Link } from 'react-router-dom'
import './footerNavbar.css'

export default function FooterNavbar() {
    return(
        <footer>
            <nav className='footer_navbar'>
                <Link to='/' className='grains_link_black black_link'>Coffee House</Link>
                <Link to='ourcoffee' className='black_link'>Our Coffee</Link>
                <Link to='pleasure' className='black_link'>For your pleasure</Link>
            </nav>
            <div className="divider footer-divider">
                <div className='black_bar'/>
                <div className='divider_grains_black'></div>
                <div className='black_bar'/>
            </div>
        </footer>
    )
}   