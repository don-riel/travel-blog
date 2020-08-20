import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const WidgetBlog = ({title, imgData, body, toLink}) => {
    return (
        <div>
            <h3>{title}</h3>
            <Img fluid={imgData} />
            <p>{body}</p>
            <Link to={toLink}>Read More</Link>
        </div>
    )
}

export default WidgetBlog;