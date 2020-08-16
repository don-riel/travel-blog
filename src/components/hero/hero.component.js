import React from 'react';
import Img from 'gatsby-image';

import HeroImages from '../../queries/hero-images'
import styles from './hero-styles.module.css'

const Hero = () => {
    const data = HeroImages();
    return (
        <div className={styles.hero_container}>
            <Img 
                fluid={data.trolltunga2.childImageSharp.fluid}
                className={styles.hero_img} 
            />
            <Img 
                fluid={data.trolltunga.childImageSharp.fluid}
                className={styles.hero_img} 
            />
            <Img 
                fluid={data.rampestreken.childImageSharp.fluid}
                className={styles.hero_img} 
            />    
        </div>
        

    )
}

export default Hero;