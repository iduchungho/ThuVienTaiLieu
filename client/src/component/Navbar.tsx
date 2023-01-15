import Logo from './Logo';
import './styles/Navbar.css';

export default function NavbarComponent() {
    return (
        <div className="header_main_ctn">
            <div className='sectionContainer'>
                <Logo/>
            </div>
        </div>
    )
}