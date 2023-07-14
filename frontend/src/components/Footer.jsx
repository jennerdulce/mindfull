import React, { Component } from 'react'
import {AiOutlineCopyrightCircle, AiFillGithub} from 'react-icons/ai'

export default class Footer extends Component {
  render() {
    return (
      <div id='footer'>
        <div id='footer-container'>
        <p className='footer-text'>
          <span>
          <AiOutlineCopyrightCircle className='footer-icons'/>
          </span>
            Copyright JNID All rights reserved.
        </p>
        <p className='footer-text'>
          <a href='https://github.com/LEARN-JNID/BrightMind'>
          <AiFillGithub className='footer-icons' />
          </a>
        </p>
        </div>
      </div>
     
      
    )
  }
}
