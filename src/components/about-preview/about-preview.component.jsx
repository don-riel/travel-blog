import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Img from 'gatsby-image';

import AboutMeData from '../../queries/about-me-data';
import LargeButton from '../button/button.component';

import styles from './about-preview-styles.module.css';

const AboutPreview = () => {
    const data = AboutMeData();
    
    return (

                <div className={styles.container} >
                <div className={styles.about_container}>
                    <Zoom>
                        <div className={styles.about_Img_container}>
                        <Img fluid={data.placeholderImage.childImageSharp.fluid} alt='a photo of me' className={styles.about_img}/>
                        </div>
                    </Zoom>
                    
                    <div className={styles.about_Text_container }>
                        <Fade top>
                            <section className={styles.about_title}>
                            <section className={styles.greeting} >
                                <h3>Hi, I'm</h3>
                            </section>
                            <section className={styles.name}>
                                <h3>Karol</h3>
                            </section>         
                        </section>
                        </Fade>
                        
                        <Fade left>
                            <p>I have always wanted to create a blog about food, travel and all my curious wonderings about our world. 
                            Now I finally got spare time and started writing with a goal to give others a taste of what goes on in my mind, 
                            and where I have wandered.
                            </p>
                        </Fade>
                        <Fade bottom>
                            <LargeButton>Learn More</LargeButton>
                        </Fade>
                        
                    </div>

                </div>
            </div>
    )
}

export default AboutPreview;