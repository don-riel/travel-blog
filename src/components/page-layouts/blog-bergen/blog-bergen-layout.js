import React from "react"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

import BergenImages from "../../../queries/bergen-images"
import getBlogExcerpt from "../../../utils/getBlogExcerpt"

import general_blog_styles from "../blog-page-styles.module.css"

export default function Blog_Bergen() {
  const images = BergenImages()
  let place = "bergen" //place written in markdown file
  let [title, intro, date] = getBlogExcerpt(place)

  return (
    <div className={general_blog_styles.blog_content_container}>
      <div className={general_blog_styles.blog_header}>
        <h3>{title}</h3>
        <p className={general_blog_styles.date}>{date}</p>
      </div>

      <Fade bottom>
        <Img
          fluid={images.img2.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of four building with old architectures"
        />
      </Fade>

      <Fade bottom>
        <p>{intro}</p>
      </Fade>

      <Fade bottom>
        <p>
          We both had the weekend free so I booked the trip right after we
          agreed. It was a week before the travel. I thought this would be in a
          way or another help us to relax a bit, forget about work and deadlines
          for a while. Luckily NSB was on sale, and I used the OBOS member card
          to avail discount for our hotel.
        </p>
      </Fade>

      <div className={general_blog_styles.divider}></div>
      {/* ============================================================= */}

      <Fade bottom>
        <div className={general_blog_styles.iframe_box}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6ZAfNX0vTCM"
            title="Bergen by Train"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Fade>

      <Fade bottom>
        <p>
          It snowed hard 2 days before the trip, and was on the evening news
          that a storm is coming to Bergen. Bergen is actually the rainiest city
          in Norway, with an average of 240 days a year- so is that even a news?
        </p>
      </Fade>

      <Fade bottom>
        <p>
          We took the morning trip on a Saturday, around 8AM and should be
          arriving in Bergen around 3PM hoping to get the best views along the
          way. Sadly, it was so foggy and most of the pictures and clips we took
          were out of luck. Mr. sun was too shy to show throughout the journey,
          but the train ride and the view was still phenomenal- the clouds were
          actually dramatic in a way.
        </p>
      </Fade>

      <Fade bottom>
        <p>
          We reached Bergen an hour late because of traffic. It was drizzling
          and windy and chilly, and since it is winter season, 4:00 was already
          dark. Nevertheless, we strolled around the city after we checked in at
          the hotel. One of the many things I forgot to consider when I booked
          was that it was Sunday the next day. In Norway, most of the shops are
          closed during Sundays. It is the law and Sundays are considered as
          family day, a day to go to the mountains or to the woods or anywhere
          where nature is. But the best thing during Sundays is that it is not
          crowded and most of the tourist attractions are still open. We only
          had a day to stroll the city. Thank heavens it did not rain that day,
          though Mr. Sun was still missing.
        </p>
      </Fade>

      <Fade bottom>
        <p>
          We took the last trip which was 11PM in Bergen and arrived in Oslo the
          next morning.
        </p>
      </Fade>

      <Fade bottom>
        <Img
          fluid={images.img3.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="iamge of an open train station during winter"
        />
      </Fade>
      <Fade bottom>
        <div className={general_blog_styles.img_caption}>
          <p>
            Myrdal Station. This is the junction to the famous Flåmsbana
            railway.
          </p>
        </div>
      </Fade>

      <Fade bottom>
        <Img
          fluid={images.img1.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of old buildings with architectures"
        />
      </Fade>
      <Fade bottom>
        <div className={general_blog_styles.img_caption}>
          <p>Bryggen.</p>
        </div>
      </Fade>

      <Fade bottom>
        <Img
          fluid={images.img4.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of an old wooden alley way"
        />
      </Fade>
      <Fade bottom>
        <Img
          fluid={images.img5.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of karol with the harbor in the background"
        />
      </Fade>
      <Fade bottom>
        <Img
          fluid={images.img6.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of bergen seen at night"
        />
      </Fade>

      <div className={general_blog_styles.divider}></div>
      {/* ============================================================= */}
    </div>
  )
}
