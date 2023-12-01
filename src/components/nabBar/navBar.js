import './navBar.css'
import Button from '../button/button';

const NavBar = ()=>{
    return (
        <div className='container'>
            <div className='logo'>
                <img src="logo.png" width={143} height={30.3} />
            </div>
            
            <div className="menu">
                <p>Home</p>
                <p>Attorneys</p>
                <p>Practice Areas</p>
                <p>About Us</p>
            </div>
            <div className='button'>
                <Button />
            </div>
        </div>
    )
}

export default NavBar;