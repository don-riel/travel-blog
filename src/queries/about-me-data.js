import { graphql, useStaticQuery } from "gatsby"

const AboutMeData = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "about" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              p1
              sub1
              sub2
              p3
              p2
            }
          }
        }
      }
      placeholderImage: file(relativePath: { eq: "about-page/about-me.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return data
}

export default AboutMeData
