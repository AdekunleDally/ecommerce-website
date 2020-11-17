import React from 'react';
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history,linkUrl,match})=>( // I destructured the title of props. i.e  the value title was pulled of the props 
  <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);