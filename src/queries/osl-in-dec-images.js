import { graphql, useStaticQuery } from "gatsby"

const Osl_Dec_Images = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "blog/osl-in-dec/img1.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "blog/osl-in-dec/img2.JPG" }) {
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

export default Osl_Dec_Images
