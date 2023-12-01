
const Team = ()=>{
    return(
        <div style={{padding: '100px 0px'}}>
            <p style={{ fontWeight:'600',fontSize:'54px',color:'var(--css-white)', display:'flex', justifyContent:'center', paddingBottom:'60px'}}>Our Team</p>
            <div style={{display: 'flex',justifyContent: 'space-around',paddingBottom: '50px'}}>
                <img src="daniel.png" alt="daniel" />
                <img src="nik.png" alt="sanfole" />
                <img src="Cesforlia.png" alt="Cesforlia" />
            </div>
            <div style={{display: 'flex',justifyContent: 'space-around', paddingBottom: '50px'}}>
                <img src="colleen.png" alt="colleen" />
                <img src="Haldone.png" alt="Haldone" />
                <img src="nik.png" alt="nik" />
            </div>
        </div>
    )
}

export default Team;