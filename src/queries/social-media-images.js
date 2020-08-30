import { graphql, useStaticQuery } from 'gatsby';

const SocialMedia = () => {
    const data = useStaticQuery(graphql`
query {
    facebook: file(relativePath: { eq: "social-media/facebook.png" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    instagram: file(relativePath: { eq: "social-media/instagram.png" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    email: file(relativePath: { eq: "social-media/email-icon.png" }) {
        childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
        }
    }
    youtube: file(relativePath: { eq: "social-media/youtube.png" }) {
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

export default SocialMedia;

