import { graphql, useStaticQuery } from 'gatsby';

const LatestBlogs = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog_item"}}}, sort: {fields: frontmatter___sort, order: DESC}, limit: 3) {
            edges {
            node {
                id
                frontmatter {
                title
                date
                intro
                place
                sort
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
    kongens_utsikt: file(relativePath: { eq: "blog/kongens-utsikt/img1.JPG" }) {
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
    return data
}


export default LatestBlogs;