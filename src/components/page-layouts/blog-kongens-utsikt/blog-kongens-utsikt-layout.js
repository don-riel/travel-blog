import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

import KongensUtsiktImages from '../../../queries/kongens-utsikt-images'
import getBlogExcerpt from '../../../utils/getBlogExcerpt'

import general_blog_styles from '../blog-page-styles.module.css'

export default function Blog_Kongens_Utsikt() {
    
    const images = KongensUtsiktImages();
    let place = 'kongens_utsikt';
    let [title, intro, date] = getBlogExcerpt(place);

    return (
        <div className={general_blog_styles.blog_content_container}>
            <div className={general_blog_styles.blog_header}>
                <h3>{title}</h3>
                <p className={general_blog_styles.date}>{date}</p>
            </div>
            <Fade bottom>
                <h4>AKERSHUS FESTNING</h4>
            </Fade>
            

            <Fade bottom>
                <p>{intro}</p>
            </Fade>
    
            <Fade bottom>
                <p>Kongens Utsikt or King´s View is located 484 metres above the lakes of Tyrifjorden and Steinsfjorden. 
                    The name was given to this place when King Karl Johan visited in 1832. 
                    It is possible to hike from Sundvolden and walk 1.3km up to Kleivstua, or you can just simply drive all the way through Kleivstua. 
                    Though you have to pay a toll road of 25kr, it thus shorten the walk to 30 minutes to the view.
                </p>
            </Fade>
            <Fade bottom><Img fluid={images.img1.childImageSharp.fluid} className={general_blog_styles.image} alt="image of a sign pointing to kongens utsikt"/></Fade>

            <Fade bottom>
                <p>I was so excited for this trip. I just recently got my driver´s license, and there is no better way to celebrate it than by driving to Hønefoss,
                     have a lunch at the top with the husband and just enjoy the serenity of the place.
                </p>
            </Fade>

        
            <div className={general_blog_styles.img_flex}>
                    <div>
                        <Fade bottom><Img fluid={images.img2.childImageSharp.fluid} className={general_blog_styles.flex_img} alt="image of a small wooden bridge"/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img3.childImageSharp.fluid} className={general_blog_styles.flex_img} alt="image of a very tall tree"/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img4.childImageSharp.fluid} className={general_blog_styles.flex_img} alt="image of a glove left on a cutten tree trunk"/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img5.childImageSharp.fluid} className={general_blog_styles.flex_img} alt="image of yellow flowers"/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img6.childImageSharp.fluid} className={general_blog_styles.flex_img} alt="image of beautiful grasses"/></Fade>
                    </div>
                    <div>
                        <Fade bottom><Img fluid={images.img7.childImageSharp.fluid} className={general_blog_styles.flex_img} alt="image of trees and grasses"/></Fade>
                    </div>     
            </div>
            

            <Fade bottom><Img fluid={images.img8.childImageSharp.fluid} className={general_blog_styles.image} alt="image of small islands seen from atop of a mountain"/></Fade>
            
            <Fade bottom>
               <p>The picture above is Steinfjorden. Stein means stone and it is pretty obvious where the name came from.</p>
            </Fade>

            <Fade bottom><Img fluid={images.img9.childImageSharp.fluid} className={general_blog_styles.image} alt="image of small islands seen from atop of a mountain"/></Fade>

            <Fade bottom>
               <p>On the left part of the bridge is Trysilfjorden.</p>
            </Fade>

            <Fade bottom><Img fluid={images.img10.childImageSharp.fluid} className={general_blog_styles.image} alt="image of karol and husband smiling"/></Fade>
            <Fade bottom><Img fluid={images.img11.childImageSharp.fluid} className={general_blog_styles.image} alt="image of a chocolate bar named kvikk lunsj"/></Fade>
    
            <Fade bottom>
               <p>My all time favorite snack in hiking, or anywhere actually! From the right top of the bar, says "Fjellvettreglene på innsiden". 
                   It means you can read tour basic rules from the inside of the plastic.</p>
            </Fade>
            
            <Fade bottom><Img fluid={images.img12.childImageSharp.fluid} className={general_blog_styles.image} alt="image of some foods"/></Fade>

            <Fade bottom>
               <p>Our "matpakke" which was rice+gyoza.</p>
            </Fade>

            <Fade bottom><Img fluid={images.img13.childImageSharp.fluid} className={general_blog_styles.image} alt="image of karol"/></Fade>
            <Fade bottom><Img fluid={images.img14.childImageSharp.fluid} className={general_blog_styles.image} alt="iamge of karol and husband"/></Fade>

            <Fade bottom>
               <p>"Takk for deg som tok bildet av oss! Det var så snilt av deg!"</p>
            </Fade>

            <Fade bottom>
               <p>We met a pensioner whom I could tell was probably in his 80´s and offered to take a photo of us.</p>
            </Fade>

            <div className={general_blog_styles.divider}></div>
             {/* ============================================================= */}

        </div>

    )
}

