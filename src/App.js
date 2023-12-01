import NavBar from './components/nabBar/navBar';
import HeroSection from './components/heroSection/heroSection';
import Intro from './components/intro/intro';
import SuccessRate from './components/successRate';
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
    </div>
    </div>
  );
}

export default App;
