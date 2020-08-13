import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';


import styles from './about-styles.module.css'


export default function AboutPage() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    date
                    title
                    sub1
                    sub2
                    p1
                    p2
                    p3
                  }
                  id
                }
              }
            totalCount
            }
            placeholderImage: file(relativePath: { eq: "about-page/about-me.JPG" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
          }
         `
    )
    console.log(data)

    return (
        <div>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} alt='a photo of me' className={styles.aboutImage} />
            {
                data.allMarkdownRemark.edges.map(({node}) => (
                    <div key={node.id}>
                        <h3>{node.frontmatter.title}</h3>
                        <p>{node.frontmatter.p1}</p>
                        <h3>{node.frontmatter.sub1} </h3>
                        <p>{node.frontmatter.p2}</p>
                        <h3>{node.frontmatter.sub2} </h3>
                        <p>{node.frontmatter.p3}</p>
                    </div>
                ))
            }
            
            
        </div>
    )
}