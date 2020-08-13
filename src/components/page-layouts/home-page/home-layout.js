import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';


import BlogPreview from '../../blog-item-preview/blog-item-preview'
import styles from './home-layout-styles.css'

export default function HomePage() {
    const data = useStaticQuery(graphql`
        query {
          allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog_item"}}}) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    place
                    intro
                    date
                  }
                }
              }
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
            rampestreken: file(relativePath: { eq: "blog/rampestreken/img1.JPG" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            akerselva: file(relativePath: { eq: "blog/akerselva/img1.JPG" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            autumn: file(relativePath: { eq: "blog/autumn-in-osl/img1.JPG" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            dog_sledding: file(relativePath: { eq: "blog/dog-sledding/img1.jpg" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            osl_dec: file(relativePath: { eq: "blog/osl-in-dec/img1.JPG" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            bergen: file(relativePath: { eq: "blog/bergen/img1.JPG" }) {
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
                        case 'rampestreken':
                            imgData = data.rampestreken.childImageSharp.fluid
                            break;
                        case 'akerselva':
                            imgData = data.akerselva.childImageSharp.fluid
                            break;
                        case 'autumn':
                            imgData = data.autumn.childImageSharp.fluid
                            break;
                        case 'dog_sledding':
                            imgData = data.dog_sledding.childImageSharp.fluid
                            break;
                        case 'osl_dec':
                            imgData = data.osl_dec.childImageSharp.fluid
                            break;
                        case 'bergen':
                            imgData = data.bergen.childImageSharp.fluid
                            break;
                        default:
                            break;
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
                  }
                )
            }
        </div>
    )
}

