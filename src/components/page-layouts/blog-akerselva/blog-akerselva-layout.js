import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

import AkerselvaImages from '../../../queries/akerselva-images'
import getBlogExcerpt from '../../../utils/getBlogExcerpt'

import general_blog_styles from '../blog-page-styles.module.css'

export default function Blog_Akerselva() {
    
    const images = AkerselvaImages();
    let place = 'akerselva';
    let [title, intro, date] = getBlogExcerpt(place);

    return (
        <div className={general_blog_styles.blog_content_container}>
            <div className={general_blog_styles.blog_header}>
                <h3>{title}</h3>
                <p className={general_blog_styles.date}>{date}</p>
            </div>
            <Fade bottom>
                <p>Spring is here and it means longer days and warmer days are on the way!</p>
            </Fade>
            <Fade bottom>
                <p>{intro}</p>
            </Fade>
            <Fade bottom>
                <p>The river marks the divider between the East and West Oslo and provided power to some industrial companies during the early period in Oslo. 
                It now offers a natural and actual representation of how Oslo developed through the years. 
                </p>
            </Fade>
            <Fade bottom>
                <p>It showcases the preservation of 1700s industrial building wood construction, 
                1900s red bricked factories with iron-shaded windows, high brick factory pipes, dams bridges and pipelines turned into lovely restaurants and buildings.</p>
            </Fade>
            <Fade bottom>
                <p>The entire river is about 8.2 kilometers long and an elevation of 149 meters from Maridalen to Bjørvika. 
                    So be mindful that some parts of the trail are steep.
                </p>
            </Fade>
            <Fade bottom>
                <p>Bikes are available all over the city during April to November. 
                    A day pass costs 49kr. Check <a href="https://oslobysykkel.no/">https://oslobysykkel.no/</a> for more information about city bikes.</p>
            </Fade>
            <Fade bottom>
                <p>It is possible to fish salmon and sea trout during summer, from July to August. 
                    You can read <a href="http://www.ofa.no/FiskeiMarka/Akerselva/FiskereglerforAkerselva.aspx">http://www.ofa.no/FiskeiMarka<br />/Akerselva/FiskereglerforAkerselva.aspx</a> for more information about fishing rules in the Aker river..</p>
            </Fade>
            <Fade bottom>
                <p>Here are some recommended stops along the river if you start from Kjelsås going to Grønland.</p>
            </Fade>

            <Fade bottom>
                <ul>
                    <Fade bottom>
                        <li>
                            <a href="https://www.tekniskmuseum.no/oslo-vitensenters-installasjoner/88-welcome-to-the-norwegian-museum-of-science-and-technology">
                            Norwegian Museum of Science & Technology.</a> Though I suggest you take a day or half day in this museum.   
                        </li>
                    </Fade>
                    <Fade bottom>
                        <li>
                            <a href="https://www.nydalenbryggeri.no/">
                            Nydalen Bryggeri & Spiseri</a> 
                        </li>
                    </Fade>
                    <Fade bottom>
                        <li>
                            <a href="https://www.oslomuseum.no/aktivitet/honse-lovisas-hus-arbeidermuseet/">
                            Hønse-Lovisas hus </a>
                            serves Norwegian waffle and coffee while enjoying the view of Møllerfossen 
                        </li>
                    </Fade>
                    <Fade bottom>
                        <li>
                            <a href="https://www.visitoslo.com/en/product/?TLp=887345">
                            Labour Museum</a>
                        </li>
                    </Fade>
                    <Fade bottom>
                        <li>
                            <a href="https://www.visitoslo.com/no/produkt/?TLp=1211999">
                            St. Pauli</a>
                        </li>
                    </Fade>
                    <Fade bottom>
                        <li>
                            <a href="https://www.visitoslo.com/en/product/?tlp=2982993&name=Aamot-bridge">
                            Aamot Bridge</a>
                        </li>
                    </Fade>
                    <Fade bottom>
                        <li>
                            <a href="https://mathallenoslo.no/">
                            Mathallen Food Hall and Indoor Market. </a>
                            Enjoy a wide selection of food and drinks. I you love ramen, 
                            I suggest to find Sapporo Ramen Bar. It is located outside the hall, just above the parking area.
                        </li>
                    </Fade>
                    <Fade bottom>
                        <li>
                            <a href="https://www.visitoslo.com/no/produkt/?TLp=181200&Bla">
                            Blå</a>
                            
                        </li>
                    </Fade>
                    <Fade bottom>
                        <li>
                            <a href="https://www.visitoslo.com/no/produkt/?TLp=809987">
                            Syng</a>
                            
                        </li>
                    </Fade>
                    <Fade bottom>
                        <li>
                            <a href="https://www.visitoslo.com/en/activities-and-attractions/boroughs/grunerlokka/activities/?tlp=2987463&name=Grunerlokka-Minigolf-Park">
                            Grunnerløkka Minigolf Park. </a>
                            Grunnerløkka is considered the hippest area in Oslo where one can discover numerous little cafés, restaurants, bars, design and vintage shops and second-hand stores.
                            
                        </li>
                    </Fade>
                </ul>
            </Fade>

            <Fade bottom><Img fluid={images.img2.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>
            <Fade bottom>
                <div className={general_blog_styles.img_caption}>
                    <p>Nydalen Station</p>
                </div>
            </Fade>
            <Fade bottom><Img fluid={images.img3.childImageSharp.fluid} className={general_blog_styles.image} /></Fade>
            <Fade bottom>
                <div className={general_blog_styles.img_caption}>
                    <p>We started the tour from Nydalen, but if you like a longer trail then you can start all the way up from Kjelsås. From Jernbanetorget take the no. 4 or 5 train or bus 37 to Nydalen.</p>
                </div>
            </Fade>
            <Fade bottom><Img fluid={images.img4.childImageSharp.fluid} className={general_blog_styles.image} /></Fade>
            <Fade bottom>
                <div className={general_blog_styles.img_caption}>
                <p>If you like a longer trail, then go all the way up to Kjelsås. Take the local train or bus 54 to Kjelsås.</p>
                </div>
            </Fade>
            
            <div className={general_blog_styles.divider}></div>
            
            <Fade bottom><Img fluid={images.img5.childImageSharp.fluid} className={general_blog_styles.image} /></Fade>
            <Fade bottom><Img fluid={images.img6.childImageSharp.fluid} className={general_blog_styles.image} /></Fade>
            <Fade bottom><Img fluid={images.img7.childImageSharp.fluid} className={general_blog_styles.image} /></Fade>
            
            <div className={general_blog_styles.divider}></div>
            
            <Fade bottom><Img fluid={images.img8.childImageSharp.fluid} className={general_blog_styles.image} /></Fade>
            <Fade bottom>
                <div className={general_blog_styles.img_caption}>
                    <p >If you feel tired, take a rest, lie in the grass and enjoy the freshness of the surroundings.</p>
                </div></Fade>
            <Fade bottom><Img fluid={images.img9.childImageSharp.fluid} className={general_blog_styles.image} /></Fade>
            <Fade bottom><Img fluid={images.img10.childImageSharp.fluid} className={general_blog_styles.image} /></Fade>
            <Fade bottom>
                <div className={general_blog_styles.img_caption}>
                    <p >Hønse-Lovisas house and Mølle waterfall.</p>
                </div>
            </Fade>
            <Fade bottom><Img fluid={images.img11.childImageSharp.fluid} className={general_blog_styles.image} /></Fade>
            <Fade bottom><Img fluid={images.img12.childImageSharp.fluid} className={general_blog_styles.image} /></Fade>
            
            <div className={general_blog_styles.divider}></div>
            
            <Fade bottom><Img fluid={images.img13.childImageSharp.fluid} className={general_blog_styles.image} /></Fade>
            <Fade bottom><Img fluid={images.img14.childImageSharp.fluid} className={general_blog_styles.image} /></Fade>
            <Fade bottom>
                <div className={general_blog_styles.img_caption}>
                    <p >Aamodt Bridge.</p>
                </div>
            </Fade>
            <Fade bottom><Img fluid={images.img15.childImageSharp.fluid} className={general_blog_styles.image} /></Fade>
            <Fade bottom>
                <div className={general_blog_styles.img_caption}>
                    <p >"100 men I can bear, but fail during rhythmic march."</p>
                </div></Fade>
            <Fade bottom><p>Enjoy a mixture of nature and urban life as you bike along the river!</p></Fade>
            
            <div className={general_blog_styles.divider}></div>
        </div>
                       
                  
                
            
    
    )
}

