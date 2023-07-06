import React from 'react'
import './Home.css'
import bannerImage from '../static/images/image.png'
import Header from './Header'
export default function Home() {
  return (
    <div className='Home'>
      <Header />
      <div className='banner'>
        <img src={bannerImage} alt="" />
        <div className='bannerText'>
          <h5>Can’t decide where you should go? Want us to help?</h5>
          <button>Click Here</button>
        </div>
      </div>
    </div>
  )
}
