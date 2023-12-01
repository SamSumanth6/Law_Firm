const Footer = ()=>{
    return (
        <div style={{padding: '80px 0px'}}>
            <div className='container' style={{padding: '30px'}}>
            <div className='logo'>
                <img src="logo.png" width={143} height={30.3} alt='logo' />
            </div>
            
            <div className="menu">
                <p>Home</p>
                <p>Attorneys</p>
                <p>Practice Areas</p>
                <p>About Us</p>
            </div>
            <div className='button'>
                <img src="footerimg.png" alt="footer"></img>
            </div>
        </div>
            <div style={{color:'gray',display: 'flex',justifyContent: 'center',gap: '30px', fontWeight:'400', fontSize:'14px', padding: '50px 0px'}}>
                <p>© 2020 Acme. All rigth reserved</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
        </div>
    )
}
export default Footer;