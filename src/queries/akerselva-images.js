import { graphql, useStaticQuery } from 'gatsby';

const AkerselvaImages = () => {
    const data = useStaticQuery(graphql`
query {
    img1: file(relativePath: { eq: "blog/akerselva/img1.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img2: file(relativePath: { eq: "blog/akerselva/img2.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img3: file(relativePath: { eq: "blog/akerselva/img3.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img4: file(relativePath: { eq: "blog/akerselva/img4.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img5: file(relativePath: { eq: "blog/akerselva/img5.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img6: file(relativePath: { eq: "blog/akerselva/img6.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img7: file(relativePath: { eq: "blog/akerselva/img7.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img8: file(relativePath: { eq: "blog/akerselva/img8.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img9: file(relativePath: { eq: "blog/akerselva/img9.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img10: file(relativePath: { eq: "blog/akerselva/img10.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img11: file(relativePath: { eq: "blog/akerselva/img11.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img12: file(relativePath: { eq: "blog/akerselva/img12.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img13: file(relativePath: { eq: "blog/akerselva/img13.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img14: file(relativePath: { eq: "blog/akerselva/img14.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img15: file(relativePath: { eq: "blog/akerselva/img15.JPG" }) {
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

export default AkerselvaImages;