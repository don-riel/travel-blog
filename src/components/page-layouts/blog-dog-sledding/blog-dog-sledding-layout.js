import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

import DogSleddingImages from '../../../queries/dog-sledding-images'
import getBlogExcerpt from '../../../utils/getBlogExcerpt'

import general_blog_styles from '../blog-page-styles.module.css'

export default function Blog_DogSledding() {
    
    const images = DogSleddingImages();
    let place = 'dog_sledding'; //place written in markdown file
    let [title, intro, date] = getBlogExcerpt(place);

    return (
        <div className={general_blog_styles.blog_content_container}>
            <div className={general_blog_styles.blog_header}>
                <h3>{title}</h3>
                <p className={general_blog_styles.date}>{date}</p>
            </div>
            
            <Fade bottom><Img fluid={images.img2.childImageSharp.fluid} className={general_blog_styles.image} alt="image of two reindeers with huge horns"/></Fade>
            <Fade bottom><Img fluid={images.img1.childImageSharp.fluid} className={general_blog_styles.image} alt="image of a snow sled being pulled by a number of dogs"/></Fade>

            <Fade bottom>
                <p>Tromsø lies in Northern Norway, 350 km from the Artic Circle and is composed of mountains, islands and fjords. 
                    {intro}
                    Well that was actually the main goal of this trip, and according to forecasts, February is one of the best times to witness the Aurora. To see the lights, weather should be perfect, I mean no rain and clouds. 
                    Unfortunately, the weather during our trip was, as they call the typical norwegian winter weather- cold, wet and dark.
                </p>
            </Fade>

            <Fade bottom>
                <p>
                Days before the trip, weather forecast says weather in the weekend won´t be great. 
                There were warnings of strong winds, avalanche, landslides and rain, but as the Norwegian saying says, `DET ER INGEN DÅRLIG VÆR, BARE DÅRLIG KLÆR!’
                </p>
            </Fade>

            <Fade bottom>
                <p>
                We arrived in Tromsø on a Thursday evening and weather was still fine by then. The view from the plane was so spectacular, you can see lighted towns and roads from above. 
                I was actually hoping they would announce to take a look at the window to see the Aurora, but sadly, it did not happen.
                </p>
            </Fade>

            <Fade bottom>
                <p>
                So plan B it is. We woke up to a windy Friday and walked 10 minutes to Fjellheisen Cable car. but sadly they had to close because of strong winds. 
                Yes, another bad news. We then decided to leave and head to town.
                </p>
            </Fade>

            <Fade bottom>
                <p>I prebooked a husky sledding tour and I was worried it would be cancelled because of the weather, but luckily not. 
                    They said that as long as there were still snow in the mountains, no rain and wind could stop the tour. 
                    We were drenched with rain and melted snow and it was freakin cold, but it was so fun I did not mind at all. 
                    It was worth the money. We were in a team of 5 strong and nice Alaskan huskies. Honestly I am cynophobic, but I was never barked at. 
                    They were trained to mingle with people and they do bark to their fellows only. 
                    The rain even made it even more exciting---the only downfall is that I couldn´t use my camera.
                </p>
            </Fade>

            <Fade bottom>
                <p>
                During our last day we visited reindeer farm pastured by Samis. 
                Sami people are indigenous folk in Norway and distinguished by their beautiful and colourful costumes.
                </p>
            </Fade>

            <Fade bottom>
                <p>
                Very thankful to our family and friends in Tromsø for the warm welcome and accommodation. 
                You made Pik´s birthday memorable. Vi er veldig takknemlig og glad i dere! <span role="img" aria-label>❤️</span>
                </p>
            </Fade>

            
            <Fade bottom>
                <div className={general_blog_styles.iframe_box}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IQz-DnDm-Qc" title="Dog Sledding and Reindeer Visit in Tromsø" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </Fade>
            <div className={general_blog_styles.divider}></div>
             {/* ============================================================= */}

             <Fade bottom><Img fluid={images.img3.childImageSharp.fluid} className={general_blog_styles.image} alt="image of a modern cathedral"/></Fade>
             <Fade bottom><Img fluid={images.img4.childImageSharp.fluid} className={general_blog_styles.image} alt="image of buildings covered in snow"/></Fade>
             <Fade bottom><Img fluid={images.img5.childImageSharp.fluid} className={general_blog_styles.image} alt="image of karol in a harbor"/></Fade>

             <div className={general_blog_styles.divider}></div>
             {/* ============================================================= */}

        </div>

    )
}

