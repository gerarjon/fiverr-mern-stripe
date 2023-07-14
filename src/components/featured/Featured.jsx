import React from 'react'
import './Featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="container">
        <div className="left">
          <h1>Find the perfect freelance services for you business</h1>
          <div className="search">
            <div className="searchInput">
              <img src="" alt="" />
              <input type="text" placeholder='Try "building mobile app"' name="" id="" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Word Press</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Featured