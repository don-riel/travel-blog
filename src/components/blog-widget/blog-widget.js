import React from 'react'


import WidgetBlog from '../widget-item/widget-blog';
import LatestBlogs from '../../queries/latest-blog'
import Fade from 'react-reveal/Fade';

import getImgFluid from '../../utils/imgFluid.utils'
import styles from './blog-widget-styles.module.css'

const Sidebar = () => {
    const sidebar_item_data = LatestBlogs();
    console.log(window.location.href)
    return (

        <div className={styles.widget}>
            <Fade bottom>
                <div className={styles.widget_header}>
                <div className= {styles.recent}><h3>Recent</h3></div>
                <div className= {styles.title}><h3>Blog Posts</h3></div>
            </div>
            </Fade>
            
            <div className={styles.widget_items}>
                
                {sidebar_item_data.allMarkdownRemark.edges.map(({node}) => {
                    let imgData = getImgFluid(sidebar_item_data, node.frontmatter.place)
                    return (
                        <Fade bottom>
                            <div key={node.id} className={styles.widget_item}>
                                <WidgetBlog 
                                    title={node.frontmatter.title}
                                    imgData = {imgData}
                                    body = {node.frontmatter.intro}
                                    toLink = {"/"}  
                                />
                            </div>
                        </Fade>
                        
                                   
                    )
                })}
            </div> 

        </div>
    )
}

export default Sidebar;
