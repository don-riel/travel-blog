import React from 'react';
import Img from 'gatsby-image';

import {WidgetButton} from '../button/button.component'
import styles from './widget-blog-styles.module.css'
import { Link } from 'gatsby';

const WidgetBlog = ({title, imgData, body, toLink}) => {
    return (
            <Link to={toLink}>
                <div className={styles.widget_container}>
                    <div className={styles.img_box}>
                        <Img fluid={imgData} className={styles.image}/>
                    </div>
                    <h3>{title}</h3>
                    <p className={styles.overflow}>{body}</p>
                   
                </div>
            </Link>
            
     
        
    )
}

export default WidgetBlog;