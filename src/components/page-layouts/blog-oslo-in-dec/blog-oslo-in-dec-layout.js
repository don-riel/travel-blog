import React from "react"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

import Osl_Dec_Images from "../../../queries/osl-in-dec-images"
import getBlogExcerpt from "../../../utils/getBlogExcerpt"

import general_blog_styles from "../blog-page-styles.module.css"

export default function Blog_Oslo_in_Dec() {
  const images = Osl_Dec_Images()
  let place = "osl_dec"
  let [title, intro, date] = getBlogExcerpt(place)

  return (
    <div className={general_blog_styles.blog_content_container}>
      <div className={general_blog_styles.blog_header}>
        <h3>{title}</h3>
        <p className={general_blog_styles.date}>{date}</p>
      </div>
      <Fade bottom>
        <Img
          fluid={images.img1.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of a street covered with christmas lights"
        />
      </Fade>
      <Fade bottom>
        <div className={general_blog_styles.img_caption}>
          <p>Karl Johan Street in December</p>
        </div>
      </Fade>

      <div className={general_blog_styles.divider}></div>

      <Fade bottom>
        <Img
          fluid={images.img2.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of a street covered with christmas lights"
        />
      </Fade>
      <Fade bottom>
        <div className={general_blog_styles.img_caption}>
          <p>Storgata in December</p>
        </div>
      </Fade>

      <div className={general_blog_styles.divider}></div>

      <Fade bottom>
        <p>{intro}</p>
        <p>
          I was quite busy as well with exams, presentations and work but I
          always make sure I balance everything else. Merry Christmas and Happy
          New Year!
        </p>
      </Fade>

      <Fade bottom>
        <div className={general_blog_styles.iframe_box}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5LCZ4fWR4Zc"
            title="Oslo in December"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Fade>
    </div>
  )
}
