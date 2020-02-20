import React from 'react';

import { withRouter } from 'react-router-dom'

import './menu-lists.scss'

const MenuList = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}
  style={{backgroundImage:`url(${imageUrl})`}}
  >
    <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuList);