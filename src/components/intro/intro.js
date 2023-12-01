import './intro.css'

const Intro = ()=>{
    return(
        <div className='container' style={{padding:'250px 0px', display: 'flex',
        justifyContent: 'space-evenly'}}>
            <div style={{paddingRight:'20px'}}>
                <p style={{
                    fontWeight:'600',
                    fontSize:'54px'
                }}>Let’s Introduce <br/>Ourself</p>
            </div>
            <div style={{
                position: 'absolute',
                top: '970px',
                left: '710px', 
                width: '1px',
                height: '206px',
                backgroundColor: 'gray', 
                }}></div>
            <div style={{paddingLeft:'20px'}}>
                <p
                style={{
                    fontWeight:'600',
                    fontSize:'32px',
                    
                }}>Criminal Lawyer</p>
                <p style={{
                    fontWeight:'600',
                    fontSize:'18px',
                    color:'gray'
                }}>Amet minim mollit non deserunt ullamco est<br/>sit aliqua dolor do amet sint. Velit officia consequatduis<br/> enim velit mollit Exercitation.</p>
            </div>
            
            {/* <div style="position: absolute;top: 888px;left: 25;width: 1px;height: 206px;background-color: gray;"></div> */}
        </div>
    )
}

export default Intro;