
const Faqs = ()=>{
    return(
        <div style={{color:'var(--css-white)', display:'flex', justifyContent:'space-between',padding: '0px 90px',paddingBottom: '100px'}}>
            <div >
            <p style={{fontWeight:'600', fontSize:'54px'}}>FAQ</p>
            <p style={{fontWeight:'500', fontSize:'18px', color:'gray',padding:'25px 0px'}}>Amet minim mollit non deserunt ullamco est sit<br/> aliqua dolor do amet sint.</p>
        </div>
        <div style={{paddingTop:'77px'}}>
            <p style={{fontWeight:'600', fontSize:'24px'}}>Do I need a personal injury report?</p>
            <p style={{fontWeight:'500', fontSize:'18px', color:'gray'}}>Amet minim mollit non deserunt ullamco est sit<br/> aliqua dolor do amet sint. Velit officia consequatduis<br/> enim velit mollit Exer. Amet minim mollit non deserunt<br/> ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
            <hr/>
            <div style={  {justifyContent: 'space-between',alignItems: 'center',display: 'flex'}  }>
            <p style={{fontWeight:'600', fontSize:'24px',padding:'20px'}}>How much is my case worth?</p>
            <button style={{backgroundColor:'var(--css-yellow)', color:'var(--css-black)', borderRadius:'50px', width:'28px', height: "28px"}}>+</button>
            </div>
            <hr/>
            <div style={  {justifyContent: 'space-between',alignItems: 'center',display: 'flex'}  }>
            <p style={{fontWeight:'600', fontSize:'24px',padding:'20px'}}>What should I do right after car accidect</p>
            <button style={{backgroundColor:'var(--css-yellow)', color:'var(--css-black)', borderRadius:'50px', width:'28px', height: "28px"}}>+</button>
            </div>
            <hr/>
            <div style={  {justifyContent: 'space-between',alignItems: 'center',display: 'flex'}  }>
            <p style={{fontWeight:'600', fontSize:'24px',padding:'20px'}}>How much is my case worth?</p>
            <button style={{backgroundColor:'var(--css-yellow)', color:'var(--css-black)', borderRadius:'50px', width:'28px', height: "28px"}}>+</button>
            </div>

        </div>
        
        </div>
    )

}

export default Faqs;