import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import styles from './blog-item-styles.module.css'

const BlogPreview = ({imgData, title,body,date, toLink }) => {
    return (
        <div className={styles.blog}>
            <Img fluid={imgData} className={styles.blog_img} />
            <div className={styles.blog_content}>
                <div className={styles.blog_header}>
                    <p className={styles.blog_title}>{title}</p>
                    <p className={styles.blog_body}>{body}</p>
                </div>
                <div className={styles.blog_item_footer}>
                    <p className={styles.date}>{date}</p>
                    <Link to={toLink}>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogPreview;