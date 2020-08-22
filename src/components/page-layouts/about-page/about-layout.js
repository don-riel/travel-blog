import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

import AboutMeData from '../../../queries/about-me-data'

import styles from './about-styles.module.css'


export default function AboutPage() {
    const data = AboutMeData();
  
    return (
        <div>
            <div className={styles.img_box}>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} alt='a photo of me' className={styles.aboutImage} />
            </div>

            <div className={styles.middle}>
                <Fade left>
                    <div className={`${styles.content_box} ${styles.light}`}>
                        <div className={styles.border_left}>
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
                            </p>
                        </div>    
                    </div>
                </Fade>
                
                <Fade right>
                    <div className={`${styles.content_box} ${styles.dark}`}>
                        <div className={styles.border_right}>
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
                            </p>
                        </div>
                    </div>
                </Fade>
               
            </div>
            
            
            
        </div>
    )
}