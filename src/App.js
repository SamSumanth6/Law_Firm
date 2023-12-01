import NavBar from './components/nabBar/navBar';
import HeroSection from './components/heroSection/heroSection';
import Intro from './components/intro/intro';
import SuccessRate from './components/successRate';
import Area from './components/area';
import FeedBack from './components/feedBack/feedBack';
import Team from './components/team/team';
import Faqs from './components/faqs/faqs';
import './App.css';

function App() {
  return (
    <div style={{backgroundColor:'var(--css-black)'}}>
      <div>
        <NavBar />
        <HeroSection />
    </div>
    <div style={{ backgroundColor: '#1c1b1b' }}>
      <Intro />
      <SuccessRate />
      <Area />
      <FeedBack />
      <Team />
      <Faqs />
    </div>
    </div>
  );
}

export default App;
