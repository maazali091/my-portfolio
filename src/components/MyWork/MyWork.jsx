import './MyWork.css'
import theme_icon from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { useState } from 'react'

function MyWork() {
  const [work, setWork] = useState(false);

  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
          <h1>My latest work</h1>
          <img src={theme_icon} alt="" />
        </div>
        <div className={`mywork-container ${work ? "all" : ""}`}>
          {mywork_data.map((work, index) => {
            return ( 
              <div className='single-work'>
                <img  key={index} src={work.w_img} />
                <div className="btn">
                  <a href={work.w_link} target='_blank'><button>Preview</button></a>
                </div>
              </div>
            )

          })}
        </div>
        <div className="mywork-showmore" on onClick={() => setWork(true)}>
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork