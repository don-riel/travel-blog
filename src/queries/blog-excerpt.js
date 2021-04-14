import { graphql, useStaticQuery } from "gatsby"

const BlogExceprt = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog_item" } } }
      ) {
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
    }
  `)
  return data
}

export default BlogExceprt
