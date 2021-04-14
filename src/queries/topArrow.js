import { graphql, useStaticQuery } from "gatsby"

const TopArrow = () => {
  const data = useStaticQuery(graphql`
    query {
      topArrow: file(relativePath: { eq: "top-arrow.png" }) {
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

export default TopArrow
