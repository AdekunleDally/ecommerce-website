import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size})=>( // I destructured the title of props. i.e  the value title was pulled of the props 
    <div className={`${size} menu-item`}>
              <div 
                  className="background-image" 
                  style={{ backgroundImage:`url(${imageUrl})` }}>
                  
                  </div>
              <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="sub-title">SHOP NOW</span>
              </div>
    </div>
)

export default MenuItem;