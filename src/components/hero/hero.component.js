import React from 'react';
import Img from 'gatsby-image';

import HeroImages from '../../queries/hero-images'
import styles from './hero-styles.module.css'

const Hero = () => {
    const data = HeroImages();
    return (
        <div>
            <div className={styles.container_full}>
                <div className={styles.hero_container}>
                
                        <Img 
                            fluid={data.trolltunga2.childImageSharp.fluid}
                            className={`${styles.hero_img} ${styles.left_img}`} 
                        />
                        <Img 
                            fluid={data.trolltunga.childImageSharp.fluid}
                            className={`${styles.hero_img} ${styles.middle_img}`} 
                        />
                        <Img 
                            fluid={data.rampestreken.childImageSharp.fluid}
                            className={`${styles.hero_img} ${styles.right_img}`} 
                        />  
                    <div className={styles.shadow_left}></div>
                    <div className={styles.shadow_right}></div>   
                    
                </div>
            </div>
            
            

        </div>
        
        

    )
}

export default Hero;