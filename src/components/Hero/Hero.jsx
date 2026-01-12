import './Hero.css'
import profile_img from '../../assets/profile_img.png'

function Hero() {
  return (
    <div id='home' className='hero'>
      <div className="img-profile">
        <img src={profile_img} alt="" />
      </div>
        <h1><span>I'm Maaz Jan,</span> frontend developer based in Pakistan.</h1>
        <p>I am a frontend developer from Charsadda, Pakistan with 4+ years of experience 
          in transforming complex Figma designs into pixel-perfect React code. I pride
           myself on being a dedicated self-learner who has built a professional career
            through independent research, consistent coding, and a passion for clean architecture.
        </p>
        <div className="hero-action">
            <div className="hero-connect"><a href="#contact">connect with me</a></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero