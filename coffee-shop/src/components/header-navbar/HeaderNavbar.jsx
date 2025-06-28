import { Link } from 'react-router-dom'
import './headerNavbar.css'

export default function HeaderNavbar() {
    return(
        <nav>
            <Link to='/' className='grains_link'>Coffee House</Link>
            <Link to='ourcoffee'>Our Coffee</Link>
            <Link to='pleasure'>For your pleasure</Link>
        </nav>
    )
}   