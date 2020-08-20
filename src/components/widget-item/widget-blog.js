import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import {SmallButton} from '../button/button.component'
import styles from './widget-blog-styles.module.css'

const WidgetBlog = ({title, imgData, body, toLink}) => {
    return (
       
            <div className={styles.widget_container}>
                <div className={styles.img_box}>
                    <Img fluid={imgData} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
                <SmallButton className={styles.link}>Read</SmallButton>
            </div>
     
        
    )
}

export default WidgetBlog;