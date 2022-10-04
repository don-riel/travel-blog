import React from "react"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

import AutumnOsloImages from "../../../queries/autumn-oslo-images"
import getBlogExcerpt from "../../../utils/getBlogExcerpt"

import general_blog_styles from "../blog-page-styles.module.css"

export default function Blog_Autumn_Oslo() {
  const images = AutumnOsloImages()
  let place = "autumn"
  let [title, intro, date] = getBlogExcerpt(place)

  return (
    <div className={general_blog_styles.blog_content_container}>
      <div className={general_blog_styles.blog_header}>
        <h3>{title}</h3>
        <p className={general_blog_styles.date}>{date}</p>
      </div>
        <h4>AKERSHUS FESTNING</h4>

        <p>
          {intro} The medieval castle, which was completed in the 1300s, had a
          strategical location at the very end of the headland, and withstood a
          number of sieges throughout the ages. King Christian IV (1588-1648)
          had the castle modernised and converted into a Renaisssance castle and
          royal residence.
        </p>
        <p>
          The fortress area is a popular venue for major events, including
          concerts, public holiday celebrations and ceremonies.
          <a href="https://www.visitoslo.com/en/product/?TLp=14900">
            {" "}
            -- VisitOslo
          </a>
        </p>
        <Img
          fluid={images.img2.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of an old castle wall"
        />
        <Img
          fluid={images.img3.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of an old castle wall beside a lake"
        />
        <Img
          fluid={images.img4.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of old structures surrounded by trees with yellow leaves and a pond"
        />
        <Img
          fluid={images.img5.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of an old road with trees and leaves with autumn colors surrounding it"
        />
        <Img
          fluid={images.img6.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of an old steet light on an old wall"
        />
        <Img
          fluid={images.img7.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of an old castle entrance"
        />
        <Img
          fluid={images.img8.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of a road with yellow trees along"
        />
        <Img
          fluid={images.img9.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of and old castle door half open"
        />

      <div className={general_blog_styles.divider}></div>
      {/* ============================================================= */}

        <h4>DAMSTREDET</h4>

        <p>
          Charming and picturesque part of central Oslo with well-preserved and
          inhabited wooden houses from the late 1700s and the 1800s.
        </p>

        <p>
          Damstredet is a cobbled street with wooden houses from the first half
          of the 19th century. The street runs between Akersveien and
          Fredensborgveien and is just 160 metres long.
          <a href="https://www.visitnorway.com/listings/damstredet-%26-telthusbakken/2787/">
            {" "}
            -- VisitOslo
          </a>
        </p>
        <Img
          fluid={images.img10.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of an old red building wall with yellow tree"
        />
        <Img
          fluid={images.img11.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of an old building with vines on the wall"
        />
        <Img
          fluid={images.img12.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of an old window with vines surrounding the corners"
        />
        <Img
          fluid={images.img13.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of old houses along side each other"
        />
        <Img
          fluid={images.img14.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of an old window with vines surrounding the corners"
        />
        <Img
          fluid={images.img15.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of pink roses"
        />
        <Img
          fluid={images.img16.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of a red rose"
        />

      <div className={general_blog_styles.divider}></div>
      {/* ============================================================= */}

        <h4>VIGELANDSPARKEN</h4>

        <p>
          Sculpture park in the Frogner Park with more than 200 sculptures by
          Gustav Vigeland (1869–1943) in bronze, granite and cast iron,
          including
          <i>
            The Angry Boy (Sinnataggen in Norwegian ), The Monolith (Monolitten)
            and The Wheel of Life (Livshjulet)
          </i>
          .
        </p>

        <p>
          Vigeland was also responsible for the design and architectural outline
          of the park, which is one of Norway's top tourist attractions, with
          more than one million annual visitors.
        </p>

        <p>
          The park is free to enter and open all year round, 24 hours a day."
          <a href="https://www.visitoslo.com/en/product/?TLp=181601">
            {" "}
            -- VisitOslo
          </a>
        </p>

        <Img
          fluid={images.img17.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of vigeland parken during autumn"
        />
        <Img
          fluid={images.img18.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of a scuplture in vigenlands park"
        />
        <Img
          fluid={images.img19.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of yellow trees with fallen leaves on the road"
        />
        <Img
          fluid={images.img20.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of a small lake surrounded by trees with autumn colors"
        />
        <Img
          fluid={images.img21.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of karol and her husband with yellow brown trees in the background"
        />
        <Img
          fluid={images.img22.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of a gate with sculptures"
        />
        <Img
          fluid={images.img23.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of karol"
        />
        <Img
          fluid={images.img24.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of karol's husband"
        />
        <Img
          fluid={images.img25.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of vigelands park"
        />

      <div className={general_blog_styles.divider}></div>
    </div>
  )
}
