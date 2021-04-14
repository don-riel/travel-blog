import { graphql, useStaticQuery } from "gatsby"

const RampestrekenImages = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "blog/rampestreken/img1.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "blog/rampestreken/img2.JPG" }) {
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

export default RampestrekenImages
