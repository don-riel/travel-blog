import React from 'react'

import SidebarItemAbout from '../sidebar-item/sidebar-item-about';
import SidebarItemPost from '../sidebar-item/sidebar-item-post';
import LatestBlogs from '../../queries/latest-blog'
import AboutMeData from '../../queries/about-me-data'

import getImgFluid from '../../utils/imgFluid.utils'
import styles from './sidebar-styles.module.css'

const Sidebar = () => {
    const sidebar_aboutMe_data = AboutMeData();
    const sidebar_item_data = LatestBlogs();
    console.log(window.location.href)
    return (

        <div className={styles.sidebar}>

            <div className={styles.about_me}>
                <h2>About Me</h2>
                {sidebar_aboutMe_data.allMarkdownRemark.edges.map(({node}) => (
                    <SidebarItemAbout  
                        key={node.id}
                        imgData = {sidebar_aboutMe_data.placeholderImage.childImageSharp.fluid}
                        body = {node.frontmatter.p1}
                        toLink = {"/"}   
                    />
                ))}
            </div>
                    
            <div className={styles.recent_posts}>
                <h2 className= {styles.recent_title}>Recent Blog Posts</h2>
                {sidebar_item_data.allMarkdownRemark.edges.map(({node}) => {
                    let imgData = getImgFluid(sidebar_item_data, node.frontmatter.place)
                    return (
                        <div key={node.id} className={styles.sidebar_item}>
                            <SidebarItemPost 
                                    title={node.frontmatter.title}
                                    imgData = {imgData}
                                    body = {node.frontmatter.intro}
                                    toLink = {"/"}  
                                />
                        </div>
                                   
                    )
                })}
            </div> 

        </div>
    )
}

export default Sidebar;
