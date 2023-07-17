import React from 'react'
import Fade from 'react-reveal/Fade';
import AccountGif from '../assets/images/IndexGif.gif'
import NewGif from '../assets/images/NewGif.gif'
import IndexGif from '../assets/images/AccountGif.gif'

function Home() {
  return (
    <div id='home-container'>
      <div id='intro-text'>
        <h1 id='intro-h1'> Welcome to Mindfull</h1>
        <Fade>
          <h4 id='intro-h4'>An online journaling and mood tracker app</h4>
        </Fade>
      </div>
      <div id='home-body-c'>
        <div className='mission'>
          <h2 className='mission-title'>Misson Statement</h2>
          <p className='mission-body'>The statistics from the World Health Organization (WHO) states that approximately 280 million people in the world have depression and 301 million suffer from stress and anxiety. Many of us have experienced these things without a positive outlet. High amounts of stress and anxiety that is left untreated can disrupt connection within the body and mind, which may lead to many other health conditions. Unfortunately, some people never overcome these conditions because they lack the tools and resources due to intimidation, cost of care, or lack of guidance. As people that have endured these mental health issues, we would like to help.</p>
        </div>
        <div className='body-demo'>
          <Fade bottom>
            <div className='demo-info'>
              <h2 className='demo-title'>Account Interface</h2>
              <p>Tracking. Track your state of mind over a span of time to see how far you've come on your journey to self-care. Your moods are emotions, and emotions are temporary. It's okay to have bad days. There are better days to come!</p>
            </div>
            <img className='img-demo' src={AccountGif} alt="gif demo" />
          </Fade>
        </div>
        <Fade bottom>
          <div className='body-demo' >
            <img className='img-demo' src={NewGif} alt="gif demo" />
            <div className='demo-info'>
              <h2 className='demo-title'>Write</h2>
              <p>Learn from the past and continue moving forward. Every day is a new day for growth and new experiences. Be kind to yourself as you recognize thoughts, feelings, and actions. They do not define you.</p>
            </div>
          </div>
        </Fade>
        <div className='body-demo'>
          <Fade bottom>
            <div className='demo-info'>
              <h2 className='demo-title'>Reflect</h2>
              <p>Review and Reflect. Trace back to older entries to learn and grow from your past experiences. Whether it be getting rid of bad habits or regrets that you might have, don't be too hard on yourself. There is always room for improvement.</p>
            </div>
            <img className='img-demo' src={IndexGif} alt="gif demo" />
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Home