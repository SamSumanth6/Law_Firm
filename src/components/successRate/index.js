import './index.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SuccessRate = ()=>{
return(
    <div>
        <div className="heading">
            <p>Why Choose us?</p>
        </div>
        <div style={{display:'flex',
            justifyContent:'center',
            gap:'20px',
            padding: '100px 0px'}}>
        <div className='card'>
        <Card  style={{
            backgroundColor:'var(--css-black)',
            width:'359px',
            height:'377px',
            borderRadius:'14px',
            
    
    }}>
        
        <CardMedia
            style={{
                width:'62px',
                height:'62px',
                position:'relative',
                left:'46px',
                top:'35px',
                backgroundColor:'var(--css-white)',
                borderRadius:'30px'
            }}
            image="Gift.png"
            title="Gift"
        />
      <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color: 'var(--css-white)', marginTop:'65px',fontWeight:'600', fontSize:'24px'}}>
                98% Success Rate
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{color: 'gray',fontWeight:'500', fontSize:'14px',marginTop:'20px'}}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{color: 'var(--css-black)',backgroundColor:'var(--css-yellow)',width:'121px', height:'43px', borderRadius:'23.5px',fontWeight:'500', fontSize:'14px'}}><strong>Read More</strong></Button>
            </CardActions>
            </Card>
        </div>
        <div className='card'>
        <Card  style={{
            backgroundColor:'#444141',
            width:'359px',
            height:'377px',
            
            borderRadius:'14px'
    
    }}>
        
        <CardMedia
            style={{
                width:'62px',
                height:'62px',
                position:'relative',
                left:'46px',
                top:'35px',
                backgroundColor:'var(--css-white)',
                borderRadius:'30px'
            }}
            image="Gift.png"
            title="Gift"
        />
      <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color: 'var(--css-white)', marginTop:'65px',fontWeight:'600', fontSize:'24px'}}>
                100% Success Rate
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{color: 'gray',fontWeight:'500', fontSize:'14px',marginTop:'20px'}}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{color: 'var(--css-black)',backgroundColor:'var(--css-yellow)',width:'121px', height:'43px', borderRadius:'23.5px',fontWeight:'500', fontSize:'14px'}}><strong>Read More</strong></Button>
            </CardActions>
            </Card>
        </div>
        <div className='card'>
        <Card  style={{
            backgroundColor:'var(--css-black)',
            width:'359px',
            height:'377px',
            borderRadius:'14px'
    
    }}>
        
        <CardMedia
            style={{
                width:'62px',
                height:'62px',
                position:'relative',
                left:'46px',
                top:'35px',
                backgroundColor:'var(--css-white)',
                borderRadius:'30px'
            }}
            image="Gift.png"
            title="Gift"
        />
      <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color: 'var(--css-white)', marginTop:'65px',fontWeight:'600', fontSize:'24px'}}>
                100% Success Rate
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{color: 'gray',fontWeight:'500', fontSize:'14px',marginTop:'20px'}}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{color: 'var(--css-black)',backgroundColor:'var(--css-yellow)',width:'121px', height:'43px', borderRadius:'23.5px',fontWeight:'500', fontSize:'14px'}}><strong>Read More</strong></Button>
            </CardActions>
            </Card>
        </div>
        </div>
    </div>
)
}

export default SuccessRate;