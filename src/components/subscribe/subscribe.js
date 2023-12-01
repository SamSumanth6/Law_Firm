import { Button } from "@mui/material";

const Subscribe = ()=>{
    return(
        <div style={{color:'var(--css-white)', display:'flex',flexDirection: 'column',alignItems: 'center', padding: '115px 0px'}}>
            <p style={{fontWeight:'500', fontSize:'55px', paddingBottom: '50px'}}>Subscribe Our Newsletter</p>
            <div>
                <form >
                    <input type="text"
                    placeholder="Name:"
                    style={{
                        width:'276px',
                        height:'53px',
                        borderRadius:'8px 0px 0px 8px',
                        marginRight:'10px'
                    }}
                    />
                    <input type="text"
                    placeholder="Enter your Email:"
                    style={{
                        width:'201px',
                        height:'53px',
                    }}
                    />
                    <button
                    style={{
                        width:'116px',
                        height:'53px',
                        borderRadius:'0px 8px 8px 0px',
                        backgroundColor:'var(--css-yellow)',
                        marginLeft:'10px'
                        
                    }}>SEND</button>
                </form>
            </div>
        </div>
    )

}
export default Subscribe;