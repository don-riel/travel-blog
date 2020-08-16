import React from 'react';

import BlogPreview from '../../blog-item-preview/blog-item-preview'
import BlogPreviewdata from '../../../queries/blog-preview-images'
import getImgFluid from '../../../utils/imgFluid.utils';


export default function BlogPage() {
    const data = BlogPreviewdata()
    
    return (
        <div>
            {
                data.allMarkdownRemark.edges.map(({node}) => {
             
                    let imgData = getImgFluid(data, node.frontmatter.place);
                    
                       return (
                         <div key={node.id}>
                            <BlogPreview 
                                imgData={imgData}
                                title={node.frontmatter.title}  
                                body={node.frontmatter.intro}
                                date={node.frontmatter.date}
                                toLink="/"  
                            />
                          </div>
                       )
                  }
                )
            }
        </div>
    )
}

