import Link from 'next/link'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/about'><a>about</a></Link></li>
            <li><Link href='/contact'><a>contact</a></Link></li>
            <li><Link href='/todolist'><a>Todo app</a></Link></li>

            <li className={styles.profileUl}><a >profile</a></li>
        </ul>    
    );
}

export default Navbar;