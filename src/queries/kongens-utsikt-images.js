import { graphql, useStaticQuery } from 'gatsby';

const KongensUtsiktImages = () => {
    const data = useStaticQuery(graphql`
query {
    img1: file(relativePath: { eq: "blog/kongens-utsikt/img1.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img2: file(relativePath: { eq: "blog/kongens-utsikt/img2.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img3: file(relativePath: { eq: "blog/kongens-utsikt/img3.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img4: file(relativePath: { eq: "blog/kongens-utsikt/img4.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img5: file(relativePath: { eq: "blog/kongens-utsikt/img5.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img6: file(relativePath: { eq: "blog/kongens-utsikt/img6.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img7: file(relativePath: { eq: "blog/kongens-utsikt/img7.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img8: file(relativePath: { eq: "blog/kongens-utsikt/img8.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img9: file(relativePath: { eq: "blog/kongens-utsikt/img9.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img10: file(relativePath: { eq: "blog/kongens-utsikt/img10.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img11: file(relativePath: { eq: "blog/kongens-utsikt/img11.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img12: file(relativePath: { eq: "blog/kongens-utsikt/img12.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img13: file(relativePath: { eq: "blog/kongens-utsikt/img13.JPG" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    img14: file(relativePath: { eq: "blog/kongens-utsikt/img14.JPG" }) {
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


export default KongensUtsiktImages;

