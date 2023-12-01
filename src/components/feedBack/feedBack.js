import './feedback.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const FeedBack = ()=>{
    return(
        <div>
            <p className="heading">What says our<br/> happy Clients</p>
            <div>
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
                width:'105px',
                height:'102px',
                position:'relative',
                left:'46px',
                top:'35px',
                
            }}
            image="male1.png"
            title="male1"
        />
      <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color: 'var(--css-white)', marginTop:'65px',fontWeight:'600', fontSize:'24px'}}>
            Jane Cooper
            </Typography>
            <Typography gutterBottom variant="h5" component="div" style={{color: 'var(--css-white)', marginTop:'10px',fontWeight:'600', fontSize:'14px'}}>
            Ceo of Hunt
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{color: 'gray',fontWeight:'500', fontSize:'14px',marginTop:'20px'}}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            </CardContent>
            
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
                width:'105px',
                height:'102px',
                position:'relative',
                left:'46px',
                top:'35px',
                
            }}
            image="female1.png"
            title="Devon"
        />
      <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color: 'var(--css-white)', marginTop:'65px',fontWeight:'600', fontSize:'24px'}}>
            Devon Lane
            </Typography>
            <Typography gutterBottom variant="h5" component="div" style={{color: 'var(--css-white)', marginTop:'10px',fontWeight:'600', fontSize:'14px'}}>
            Ceo of Hunt
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{color: 'gray',fontWeight:'500', fontSize:'14px',marginTop:'20px'}}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            </CardContent>
            
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
                width:'105px',
                height:'102px',
                position:'relative',
                left:'46px',
                top:'35px',
                
            }}
            image="male2.png"
            title="robert"
        />
      <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color: 'var(--css-white)', marginTop:'65px',fontWeight:'600', fontSize:'24px'}}>
            Robert Fox
            </Typography>
            <Typography gutterBottom variant="h5" component="div" style={{color: 'var(--css-white)', marginTop:'10px',fontWeight:'600', fontSize:'14px'}}>
            Ceo of Hunt
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{color: 'gray',fontWeight:'500', fontSize:'14px',marginTop:'20px'}}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            </CardContent>
            
            </Card>
        </div>
        </div>
            </div>
        </div>
    )
}

export default FeedBack;