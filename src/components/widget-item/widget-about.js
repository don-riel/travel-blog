import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const WidgetAbout= ({imgData,body, toLink}) => {
    return (
        <div>
            <Img fluid={imgData} className='image'/>
            <p>{body}</p>
            <Link to={toLink} >Read More</Link>   
        </div>
    )
}

export default WidgetAbout;