import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


import BlogPreview from '../../blog-item-preview/blog-item-preview'

export default function HomePage() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    date
                    intro
                    title
                    place
                  }
                }
              }
              totalCount
            }
            telemark: file(relativePath: { eq: "blog/telemark/img1.JPG" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            endOfTheWorld: file(relativePath: { eq: "blog/endOfTheWorld/img1.JPG" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            western: file(relativePath: { eq: "blog/western-norway/img1.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            trolltunga: file(relativePath: { eq: "blog/trolltunga/img1.JPG" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            kongens_utsikt: file(relativePath: { eq: "blog/kongens-utsikt/img1.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
          }
          
         `
    )
   

    return (
        <div>
            {
                data.allMarkdownRemark.edges.map(({node}) => {
                    let imgData = null;
                    switch (node.frontmatter.place) {
                        case 'telemark':
                            imgData = data.telemark.childImageSharp.fluid
                            break;
                        case 'endOfTheWorld':
                            imgData = data.endOfTheWorld.childImageSharp.fluid
                            break;
                        case 'western':
                            imgData = data.western.childImageSharp.fluid
                            break;
                        case 'trolltunga':
                            imgData = data.trolltunga.childImageSharp.fluid
                            break;
                        case 'kongens_utsikt':
                            imgData = data.kongens_utsikt.childImageSharp.fluid
                            break;
                        default:
                            break;
                    }
                
                    if(node.id === "cd04d8f9-ad25-561b-a95f-ca62ddd44d4d") {
                        return
                    }
                
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
                })
            }
        </div>
    )
}

