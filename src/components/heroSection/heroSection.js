import React from 'react';
import './heroSection.css'; // Make sure to import your heroSection.css file

const HeroSection = () => {
  return (
    <div className='container'>
      <div>
        <div className='hero-text'>
            <p className="hero-heading" style={{ color: "var(--css-white)", fontWeight: "500", fontSize: "66px" }}>
            You don’t have to<br />
            <strong>Fight them Alone.</strong>
            </p>
            <p className="hero-subheading" style={{ color: "gray", fontWeight: "500", fontSize: "18px" }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            <br /> curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            <br /> eget, hac massa gravida arcu interdum proin curae.
            </p>
        </div>
        <div className="search-box" style={{ position: 'relative', marginTop: '20px' }}>
            <form style={{ position: 'relative' }}>
            <input
                type="text"
                placeholder="Enter your email address"
                name="search"
                style={{
                width: "438px",
                height: "74px",
                borderRadius: "43px",
                opacity: "10%",
                paddingRight: "160px", 
                fontWeight:'500',
                fontSize:'16px',
                textAlign: 'center',
                color: 'gray !important'
                
                }}
            />
            <button
                className="button"
                style={{
                position: 'absolute',
                top: '6px',
                left: '295px',
                width: "137px",
                height: "62px",
                borderRadius: "43px",
                background: "var(--css-yellow)",
                color: "var(--css-black)",
                fontSize: "16px",
                fontWeight: "600",
                border: 'none',
                cursor: 'pointer'
                }}
            >
                Let's Talk
            </button>
            </form>
        </div>
      </div>
      <div className="hero-image">
        <img src="heroimage.png" alt="heroImage" />
      </div>
    </div>
  );
};

export default HeroSection;
