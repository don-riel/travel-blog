import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

import TrolltungaImages from '../../../queries/trolltunga-images'
import getBlogExcerpt from '../../../utils/getBlogExcerpt'

import general_blog_styles from '../blog-page-styles.module.css'

export default function Blog_Trolltunga() {
    
    const images = TrolltungaImages();
    let place = 'trolltunga'; //place written in markdown file
    let [title, intro, date] = getBlogExcerpt(place);

    return (
        <div className={general_blog_styles.blog_content_container}>
            <div className={general_blog_styles.blog_header}>
                <h3>{title}</h3>
                <p className={general_blog_styles.date}>{date}</p>
            </div>
            
            <Fade bottom><Img fluid={images.img1.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>{intro}</p>
            </Fade>

    
            <Fade bottom>
                <p>The original plan was just to take a roadtrip to Odda and Flåm, around the beautiful fjords of Hardanger. 
                    However the husband convinced me to just do it, hike to Trolltunga, and so we did.
                </p>
            </Fade>

            <Fade bottom>
                <p>We were to leave Oslo Monday, planned to take the hike on the second day of the trip, but the weather prediction changed showing cloudy, rainshowers, thunder and lighting on that date. 
                    The weather on Monday was far better, so we revised the plan.
                </p>
            </Fade>

            <Fade bottom>
                <p>Right after our work on Sunday, we went home, finished packing our bags, ate early dinner and drove straight to Odda Camping. 
                    We arrived past 11PM and slept in the car. Surprisingly, we had a good night sleep!
                </p>
            </Fade>

            <Fade bottom>
                <p>We left Odda Camping at 6.30 in the morning and arrived at the P3 parking, upper trailhead by 7. Parking at the upper trailhead saves 3 hours back and forth. 
                    And according to those who have done the hike, before the road was constructed, it was the most difficult part of the trail.
                </p>
            </Fade>

            <Fade bottom>
                <p>You can book your parking here. <a href="https://www.trolltunganorway.com/en_GB/parking">https://www.trolltunganorway.com/en_GB/parking.</a> 
                </p>
            </Fade>

            <Fade bottom>
                <p>The video will show you a glimpse of the Trolltunga trail. It was foggy when we started the hike, and as we went higher, it got worse. It was not easy to find the red T sign. There were lots of hikers so we just had to follow footprints. It took us 3 hours to reach the tongue and four and a half hours to go back to the parking. 
                    Yes 4.5 hours! Since the fog has cleared up, we took our time walking, took a lot of breaks while enjoying the magnificent view! 
                </p>
            </Fade>

            <Fade bottom>
                <div className={general_blog_styles.iframe_box}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8476SIFmMsw" title="Trolltunga Hike" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>               
                </div>
            </Fade>

            <Fade bottom>
                <p>It was so worth the climb and the wait! 
                </p>
            </Fade>

            <Fade bottom>
                <p>Here are some pictures along the trail. </p>
            </Fade>

            
            <div className={general_blog_styles.img_flex}>
                    
                    <div>
                        <Fade bottom><Img fluid={images.img3.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img4.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img5.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img6.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img7.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img8.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div> 
                    <div>
                        <Fade bottom><Img fluid={images.img9.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div> 
                    <div>
                        <Fade bottom><Img fluid={images.img10.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div> 
                    <div>
                        <Fade bottom><Img fluid={images.img11.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div> 
                    <div>
                        <Fade bottom><Img fluid={images.img12.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div> 
                    <div>
                        <Fade bottom><Img fluid={images.img13.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div>      
            </div>
           

            <Fade bottom>
                <p>And our pictures in the tongue!</p>
            </Fade>

            <Fade bottom><Img fluid={images.img14.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>Too tired my dear?</p>
            </Fade>

            <Fade bottom><Img fluid={images.img15.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p> On the little tongue just below the actual Troll´s tongue.</p>
            </Fade>

            <Fade bottom><Img fluid={images.img16.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>Look at our faces now that we have seen the view!</p>
            </Fade>

            <Fade bottom>
                <div className={general_blog_styles.img_flex}>
                    
                    <div>
                        <Fade bottom><Img fluid={images.img17.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img18.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img19.childImageSharp.fluid} className={`${general_blog_styles.flex_img} ${general_blog_styles.small_img}`}/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img20.childImageSharp.fluid} className={`${general_blog_styles.flex_img} ${general_blog_styles.small_img}`}/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img21.childImageSharp.fluid} className={`${general_blog_styles.flex_img} ${general_blog_styles.small_img}`} /></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img22.childImageSharp.fluid} className={general_blog_styles.flex_img}/></Fade>
                    </div>      
                </div>
            </Fade>


            <div className={general_blog_styles.divider}></div>
             {/* ============================================================= */}

        </div>

    )
}

