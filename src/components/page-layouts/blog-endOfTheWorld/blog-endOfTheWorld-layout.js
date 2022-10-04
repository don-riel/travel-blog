import React from "react"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

import EndOfTheWorldImages from "../../../queries/endOfTheWorld-images"

import getBlogExcerpt from "../../../utils/getBlogExcerpt"

import general_blog_styles from "../blog-page-styles.module.css"

export default function Blog_EndOfTheWorld() {
  const images = EndOfTheWorldImages()
  let place = "endOfTheWorld" //place written in markdown file
  let [title, intro, date] = getBlogExcerpt(place)

  return (
    <div className={general_blog_styles.blog_content_container}>
      <div className={general_blog_styles.blog_header}>
        <h3>{title}</h3>
        <p className={general_blog_styles.date}>{date}</p>
      </div>

        <p>{intro}</p>

        <Img
          fluid={images.img1.childImageSharp.fluid}
          className={general_blog_styles.image}
        />

        <p>
          The picturesque lighthouse called Vippefyret is made of stones. The
          stones were collected from the local beaches in the area.
        </p>

        <Img
          fluid={images.img2.childImageSharp.fluid}
          className={general_blog_styles.image}
        />

        <p>
          Verdens Ende, which translates to World´s End is a place located in
          the southern tip of Tjøme, Norway. It is a 2-hr ride away from Oslo.
        </p>
        <p>
          The place caters a magnificent fjord view, colourful boats,
          fishermen's huts, rocks, fishing spots, and skerries.
        </p>

      <div className={general_blog_styles.img_flex}>
        <div>
            <Img
              fluid={images.img3.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
        </div>
        <div>
            <Img
              fluid={images.img4.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
        </div>
        <div>
            <Img
              fluid={images.img5.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
        </div>
        <div>
            <Img
              fluid={images.img6.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
        </div>
        <div>
            <Img
              fluid={images.img7.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
        </div>
        <div>
            <Img
              fluid={images.img8.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
        </div>
      </div>

        <p>
          Walking on the rocks feel like a never ending journey going to the
          middle of the ocean. The sound of water hitting rocks is a melody to
          the ears.
        </p>

      <div className={general_blog_styles.img_flex}>
        <div>
            <Img
              fluid={images.img10.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
        </div>

        <div>
            <Img
              fluid={images.img12.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
        </div>
        <div>
            <Img
              fluid={images.img13.childImageSharp.fluid}
              className={`${general_blog_styles.flex_img} ${general_blog_styles.small_img}`}
            />
        </div>
        <div>
            <Img
              fluid={images.img14.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
        </div>
      </div>

        <Img
          fluid={images.img15.childImageSharp.fluid}
          className={general_blog_styles.flex_img}
        />

        <p>
          A restaurant with an 360° view and a souvenir shop are also perfectly
          structured to give an amazing view of the place.
        </p>

      <div className={general_blog_styles.divider}></div>
      {/* ============================================================= */}
    </div>
  )
}
