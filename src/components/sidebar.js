/**
 * Sidebar component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"


import WidgetBlog from '../components/widget-item/widget-blog'
import LatestBlogs from '../queries/latest-blog'
import getImgFluid from '../utils/imgFluid.utils'


import  styles from "./sidebar-styles.module.css"


const Sidebar = ({children }) => {
  const latestData = LatestBlogs();

 
  return (
    
    <div>
          <div className={styles.blog_body}>
              <main>{children}</main>
              <aside className={styles.sidebar}>
                <h4>Recent Blog Posts</h4>
                {latestData.allMarkdownRemark.edges.map(({node}) => {
                    let imgData = getImgFluid(latestData, node.frontmatter.place)
                    return (
                            <div key={node.id} className={styles.widget_item}>
                                <WidgetBlog 
                                    title={node.frontmatter.title}
                                    imgData = {imgData}
                                    body = {node.frontmatter.intro}
                                    toLink={`${'/'}${node.frontmatter.place}`}
                                />
                            </div>

                    )
                })}
              </aside>
          </div>
         
           
     </div>
      
    
  )
}


export default Sidebar


// <div className={styles.link}>
// <Link to="/blog" className={styles.link_to_blogPage} activeClassName= {styles.active}>Read More Blogs</Link>
// </div>