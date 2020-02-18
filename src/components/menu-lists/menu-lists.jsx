import React from 'react';


import './menu-lists.scss'

const MenuList = ({ title, imageUrl }) => (
  <div className='menu-item'
  style={{backgroundImage:`url(${imageUrl})`}}
  >
    <div className='content'>
      <div className='title'>{title}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default MenuList;