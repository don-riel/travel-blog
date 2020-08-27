import { graphql, useStaticQuery } from 'gatsby';

const BergenImages = () => {
    const data = useStaticQuery(graphql`
query {
    img1: file(relativePath: { eq: "blog/bergen/img1.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img2: file(relativePath: { eq: "blog/bergen/img2.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img3: file(relativePath: { eq: "blog/bergen/img3.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img4: file(relativePath: { eq: "blog/bergen/img4.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img5: file(relativePath: { eq: "blog/bergen/img5.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img6: file(relativePath: { eq: "blog/bergen/img6.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img7: file(relativePath: { eq: "blog/bergen/img7.JPG" }) {
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


export default BergenImages;

