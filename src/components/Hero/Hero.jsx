import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import resume from '../../../public/Resume.pdf';

function Hero() {
  return (
    <div id='home' className='hero'>
      <div className="img-profile">
        <img src={profile_img} alt="" />
      </div>
        <h1><span>I'm Faisal Hayat,</span> Amazon Account Manager </h1>
        <p>I’m Faisal, an Amazon Account Manager with 4+ years of experience in product hunting, sourcing, brand launches, and PPC management across the US and UK marketplaces. I focus on data-driven strategies to improve visibility, optimize ad spend, and drive profitable growth for Amazon brands.
        </p>
        <div className="hero-action">
            <div className="hero-connect"><a href="#contact">Get Free Audit</a></div>
            {/* <div className="hero-resume"><a href={resume} target='_blank'>My Resume</a></div> */}
        </div>
    </div>
  )
}

export default Hero