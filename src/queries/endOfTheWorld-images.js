import { graphql, useStaticQuery } from 'gatsby';

const EndOfTheWorldImages = () => {
    const data = useStaticQuery(graphql`
query {
    img1: file(relativePath: { eq: "blog/endOfTheWorld/img1.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img2: file(relativePath: { eq: "blog/endOfTheWorld/img2.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img3: file(relativePath: { eq: "blog/endOfTheWorld/img3.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img4: file(relativePath: { eq: "blog/endOfTheWorld/img4.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img5: file(relativePath: { eq: "blog/endOfTheWorld/img5.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img6: file(relativePath: { eq: "blog/endOfTheWorld/img6.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img7: file(relativePath: { eq: "blog/endOfTheWorld/img7.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img8: file(relativePath: { eq: "blog/endOfTheWorld/img8.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img9: file(relativePath: { eq: "blog/endOfTheWorld/img9.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img10: file(relativePath: { eq: "blog/endOfTheWorld/img10.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img11: file(relativePath: { eq: "blog/endOfTheWorld/img11.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img12: file(relativePath: { eq: "blog/endOfTheWorld/img12.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img13: file(relativePath: { eq: "blog/endOfTheWorld/img13.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img14: file(relativePath: { eq: "blog/endOfTheWorld/img14.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img15: file(relativePath: { eq: "blog/endOfTheWorld/img15.JPG" }) {
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


export default EndOfTheWorldImages;

