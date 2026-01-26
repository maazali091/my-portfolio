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
                    <p>I’m Faisal, an Amazon Account Manager with 4+ years of experience helping 
                        brands build, launch, and scale successfully on Amazon, with a strong focus 
                        on the US and UK marketplaces. My expertise covers the complete Amazon lifecycle,
                        including product hunting, product sourcing, brand launching, PPC management, and
                        detailed PPC reporting.</p>

                    <p> I take a data-driven, results-focused approach, combining
                        market research, competitor analysis, and continuous optimization to improve visibility,
                        control ad spend, and drive profitable growth. Whether working with new launches or 
                        established brands, my goal is to deliver clarity, consistency, and measurable results.</p>

                
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>Product Hunting & Sourcing:</p> <div className="line"><span>100%</span><hr style={{width:"100%"}} /></div> 
                    </div>
                    <div className="about-skill">
                        <p>Amazon Advertising:</p> <div className="line"> <span>100%</span><hr style={{width:"100%"}} /></div>
                    </div>
                    <div className="about-skill">
                        <p>Account Management:</p> <div className="line"><span>100%</span><hr style={{width:"100%"}} /></div>
                    </div>
                    <div className="about-skill">
                        <p>Deep Competitor Analysis:</p> <div className="line"><span>100%</span><hr style={{width:"100%"}} /></div>
                    </div>
                    <div className="about-skill">
                        <p>Amazon SEO:</p> <div className="line"><span>100%</span><hr style={{width:"100%"}} /></div>
                    </div>
                    <div className="about-skill">
                        <p>Images/EBC:</p> <div className="line"><span>100%</span><hr style={{width:"100%"}} /></div>
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
                <p>BRANDS LAUNCHES</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>116M+</h1>
                <p>REVENUE GENERATED</p>
            </div>
        </div>
    </div>
  )
}

export default About