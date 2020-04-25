import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageurl,size,match,linkurl,history}) => (
<div className= {`${size} menu-item`} onClick={() =>
    history.push(`${match.url}${linkurl}`)}>
    <div className='background-image' style={{
    backgroundImage: `url(${imageurl})`
}}/>
        <div className= 'content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
   )

   export default withRouter(MenuItem);