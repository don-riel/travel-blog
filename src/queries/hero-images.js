import { graphql, useStaticQuery } from 'gatsby';

const HeroImages = () => {
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
    trolltunga: file(relativePath: { eq: "blog/trolltunga/img1.JPG" }) {
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
    trolltunga2: file(relativePath: { eq: "blog/trolltunga/img21.jpg" }) {
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

export default HeroImages;