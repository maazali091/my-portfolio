import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import prfoile_img from '../../assets/profile_img.png'

function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About <span style={{color:'#fff'}}>me</span></h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={prfoile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a passionate Frontend Developer from Charsadda, Pakistan, with over
                         4 years of dedicated experience in the world of web development. My 
                         journey is unique because I am entirely self-taught; I turned my curiosity
                          into a professional skill set right from my home studio.</p>

                    <p>I don’t just build websites; I craft digital experiences with a focus on pixel-perfect
                         React components and clean, scalable architecture. My dedication is reflected in every
                          line of code I write and every complex design I bring to life.
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p> <div className="line"><span>85%</span><hr style={{width:"80%"}} /></div> 
                    </div>
                    <div className="about-skill">
                        <p>React JS</p> <div className="line"> <span>65%</span><hr style={{width:"65%"}} /></div>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p> <div className="line"><span>60%</span><hr style={{width:"60%"}} /></div>
                    </div>
                    <div className="about-skill">
                        <p>Bootstrap</p> <div className="line"><span>50%</span><hr style={{width:"50%"}} /></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>30+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HOURS DAILY CODING</p>
            </div>
        </div>
    </div>
  )
}

export default About