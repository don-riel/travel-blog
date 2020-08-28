import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';

import WesternNorwayImages from '../../../queries/western-norway-images';
import getBlogExcerpt from '../../../utils/getBlogExcerpt'

import general_blog_styles from '../blog-page-styles.module.css'

export default function Blog_WesternNorway() {
    
    const images = WesternNorwayImages();
    let place = 'western'; //place written in markdown file
    let [title, intro, date] = getBlogExcerpt(place);

    return (
        <div className={general_blog_styles.blog_content_container}>
            <div className={general_blog_styles.blog_header}>
                <h3>{title}</h3>
                <p className={general_blog_styles.date}>{date}</p>
            </div>
        
            <Fade bottom>
                <h4>DAY 1</h4>
            </Fade>

            <Fade bottom>
                <p>This was the start of our four-day road trip to Western Norway.</p>
            </Fade>

            <Fade bottom><Img fluid={images.img2.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>


            <Fade bottom>
                <p>{intro}</p>
            </Fade>

            <Fade bottom><Img fluid={images.img3.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>
            <Fade bottom><Img fluid={images.img4.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>It was so surreal seeing the gigantic Trollwall.</p>
            </Fade>

            <Fade bottom><Img fluid={images.img5.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>We drove straight to Gjerdsetbygda Turistsenter where we stayed for our first day. The mountain and lake views were splendid, I could live there. The apartment itself was cozy, spacious and relaxing. 
                    We took our lunch there, rested for a while and drove 10 minutes away to the starting point of our hike, Rampestreken.
                </p>
            </Fade>
           
            <Fade bottom><Img fluid={images.img6.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>Rampestreken is not as popular as Trolltunga or Preikestolen, but is just as wonderful as the two. 
                    It is considered a moderate hike, an average of 2-3 hr back and forth, and even children and people of age can do it. In fact we met a lot of kids and oldies along the hike.
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img7.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>
            <Fade bottom><Img fluid={images.img8.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                    After the hike, we drove back to the Gjerdsetbygda and took advantage of the free kayaking offered by the place. 
                    Imagine after a 6-hr drive, we still managed to do hiking and kayaking?                
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img9.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                    Here is the <a href="http://visitgjerdset.no/joomla/en/">link</a> to the center and I highly recommend this place. The place is very relaxing and the host was friendly and accomodating. 
                    We booked an apartment type room which has lake and mountain view, a private bathroom and a kitchen so that we can cook our own food.              
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img10.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>


            <Fade bottom>
                <div className={general_blog_styles.iframe_box}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9ihP5RunO10" title="Møre og Romsdal Roadtrip Day 1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
                </div>
            </Fade>



            <div className={general_blog_styles.divider}></div>
             {/* ============================================================= */}

             <Fade bottom>
                <h4>DAY 2</h4>
            </Fade>

            <Fade bottom>
                <p>
                    It was drizzling when we left Åndalsnes early in the morning and drove half an hour to Trollstigen. 
                    We took the famous Road 63, also called the Golden Route, which offered such spectacular views.              
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img11.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                    Normally this road opens late May and closes late October because of deep snow and avalanches during the winter. 
                    The road twists through 11 hairpin bends, and a waterfall Stigfossen is located in the middle.             
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img12.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                     At the top is a viewpoint, café and souvenir shops that usually open during the summer. 
                    It took us an hour or two at the viewpoint since clouds covered the view, and had to wait until it cleared off, then continued the trip to Geiranger.    
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img13.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>
            <Fade bottom><Img fluid={images.img14.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>
            <Fade bottom><Img fluid={images.img15.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>
            <Fade bottom><Img fluid={images.img16.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>
            <Fade bottom><Img fluid={images.img1.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                The drive from Trollstigen to Geiranger was so dramatic and surreal---lush valleys, strawberry farms in Valldal, countless waterfall, lakes at the top of the mountains, farms, unique style cabins and a lot to be discovered. 
                I recently learned from a friend that Valldall has the sweetest strawberry in Norway and sadly, we didn't try one. It was like a feast in the eye. 
                Cabins or “hytta” which is very popular here can be seen at mountain tops end ridges and even on the narrowest mountain ledge.    
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img17.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>
            <Fade bottom><Img fluid={images.img18.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                Norway has more than 50 000 islands, and travelling from Valldal to Geiranger required a ferry ride, along with the car of course. 
                We probably took 4-5 ferry rides during the entire trip to transfer from once island to another.    
                </p>
            </Fade>

            <Fade bottom>
                <p>
                Expect a lot of downward and upward slopes when driving to Geiranger. Actually it was the best decision that we didn´t took the return cruise because as noon came, the road became too busy and crowded. 
                Just watch the video and see how Geirangerfjord looks like, because I cannot even describe the feeling.    
                </p>
            </Fade>

            <Fade bottom>
                <div className={general_blog_styles.iframe_box}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lnylOUouSUY" title="Geiranger - Trollstigen Roadtrip 2018" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Fade>

            <Fade bottom>
                <p>
                Unfortunately, it was raining when we reached the town of Geiranger. It was small and crowded because of the number of tourists. 
                Just look how massive the cruise was, which estimated more than a thousand heads in there. It took us almost 30 minutes looking for a place to park and eat.    
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img19.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>
            <Fade bottom><Img fluid={images.img20.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>
            <Fade bottom><Img fluid={images.img21.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                It is recommended to book the cruise beforehand just to secure a place, especially if you have a car. 
                Though it was still raining when we boarded the ferry, we still enjoyed the view, though it was crowded and I was a little bit disappointed.    
                </p>
            </Fade>

            <Fade bottom>
                <p>
                We docked at the town of Stranda where we booked our stay for our second night. The ski resort was far from the town center, and since it was raining, visibility along the road was poor, but it was all worth the drive. 
                The cabin was fairytale like---a perfect place to end this tiring but spectacular and unforgettable day!                
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img22.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                Here is the <a href="https://www.stranda-fjellgrend.com/">link</a> to the ski center where our cabin was located.
                </p>
            </Fade>

            <Fade bottom>
                <p>
                It is located a little bit far from the city center so I highly recommend to buy food and stuffs you need before driving to the cabins. 
                We fetched the key, toiletries and beddings at Stranda Tourist Center and drove all the way up.                </p>
            </Fade>

            <Fade bottom>
                <p>
                Constructions were still ongoing when we went, and the cabin smelled and looked new. The view included a small river, mountains and beautiful traditional but modern designed Scandinavian cabins. It was also blueberry season and there were berries all over the place. 
                We took some time to pick and had them for breakfast the next day.
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img23.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <div className={general_blog_styles.divider}></div>
             {/* ============================================================= */}

            <Fade bottom>
                <h4>DAY 3</h4>
            </Fade>

            <Fade bottom>
                <p>
                The third day of our roadtrip was in Northwestern Norway. We took off early from Stranda Ski Center and drove 2 hrs to Ålesund, still in Møre og Romsdal County. 
                The town is popularly known for its beautiful, artistic and fairytail like Art Nouveau architecture.
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img24.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                The entire town was destroyed by a devastating fire in 1904 forcing the population to evacuate, leaving thousands without homes. The town was then rebuilt in stone, brick and mortar in Art Nouveau style. 
                To commemorate the event, townsfolk build a very enormous bonfire measuring about 40 meters high, in celebration of the summer solstice every year.
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img25.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                We drove all the way up to Aksla to witness a panoramic view of the city and Sunnmøre Alps. The alternative way is to walk 418 steps up to the viewpoint. 
                There is a café located at the top, called Fjellstua.
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img26.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                We took an early lunch and drove next to Averøy.
                </p>
            </Fade>

            <Fade bottom>
                <p>
                Ever since we got our car, we had always hoped that one day we could drive here, and so we did.
                </p>
            </Fade>

            <Fade bottom>
                <p>
                Atlantic Ocean Road is known to be one of the worlds’ most beautiful drive. It features a unique stretch of road right out to the ocean’s edge. 
                It connects series of small islands and islets spanned by a total of eight bridges over 8274 meters.
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img27.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                Though it was cloudy and windy, we enjoyed the salty air and magnificent coastal view. 
                Some even prefer to drive this road when a storm is brewing to experience waves clashing through the road.
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img28.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                It was summer so when we were there, so the ocean was flat and calm.
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img29.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                Then we drove to our last destination, Trondheim, and stayed at Thon Hotel Nidaros for the night. We reached Trondheim at around 20:00. Unfortunately the dinner at the hotel was already closed, and since it was not yet dark outside, we went our for dinner.
                </p>
            </Fade>

            <Fade bottom>
                <div className={general_blog_styles.iframe_box}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zZl7LiJtYPA" title="Møre og Romsdal Roadtrip Day 2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Fade>

            <div className={general_blog_styles.divider}></div>
             {/* ============================================================= */}

             <Fade bottom>
                <h4>DAY 4</h4>
            </Fade>

            <Fade bottom>
                <p>
                Today is the last day of our trip. Luckily the weather was perfect for a morning stroll.
                </p>
            </Fade>
            <Fade bottom>
                <p>
                Trondheim is the third largest city in Norway, next to Oslo and Bergen. We rented a city bike to stroll the city.
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img30.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                We cycled to the Old Town houses at the back of Bakklandet, to the Old town bridge and Nidaros Cathedral. 
                The neighborhood is dominated by small, colourful wooden houses, blossoming plants and cobble narrow streets.  
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img31.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <Fade bottom>
                <p>
                The cathedral is the Notre Dame of Norway, a sanctuary built over the grave of St. Olav in the middle of the 12th century. 
                He was King of Norway from 1015 to 1028.  
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img32.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>
            <Fade bottom><Img fluid={images.img33.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>


            <Fade bottom>
                <p>
                We then cycled back to the hotel, rested, packed and drove back to Oslo after lunch. 
                </p>
            </Fade>
            <Fade bottom>
                <p>
                This was a trip to remember, and I can say the best of the road trips I had so far. I can´t even explain into words how I felt during the entire trip. 
                Everything I saw in all angles where breathtaking---the view, mountains, oceans, fjords, alps, lakes, rivers, landscape, unique cabins, waterfalls, and those cities with beautiful people and architecture. Everything! 
                </p>
            </Fade>

            <Fade bottom><Img fluid={images.img34.childImageSharp.fluid} className={general_blog_styles.image}/></Fade>

            <div className={general_blog_styles.divider}></div>
             {/* ============================================================= */}

             
        </div>

    )
}

