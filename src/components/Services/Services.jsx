import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

function Services() {
  return (
    <div id='service' className='services'>
        <div className="services-title">
            <h1>My <span>Services</span></h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((service, index) => {
                return <div key={index} className="services-format">
                    <h3><service.s_icon /></h3>
                    <h2>{service.s_name}</h2>
                    <p className='desc'>{service.s_desc}</p>
                    {/* <div className="services-readmore">
                       <p>Read More</p> 
                       <img src={arrow_icon} alt="" />
                    </div> */}
                </div>
            })}
        </div>
    </div>
  )
}

export default Services