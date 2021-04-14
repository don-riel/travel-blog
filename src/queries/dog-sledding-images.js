import { graphql, useStaticQuery } from "gatsby"

const DogSleddingImages = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "blog/dog-sledding/img1.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "blog/dog-sledding/img2.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "blog/dog-sledding/img3.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4: file(relativePath: { eq: "blog/dog-sledding/img4.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img5: file(relativePath: { eq: "blog/dog-sledding/img5.JPG" }) {
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

export default DogSleddingImages
