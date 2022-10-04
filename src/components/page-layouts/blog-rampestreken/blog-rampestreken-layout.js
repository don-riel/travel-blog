import React from "react"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

import RampestrekenImages from "../../../queries/rampestreken-images"
import getBlogExcerpt from "../../../utils/getBlogExcerpt"

import general_blog_styles from "../blog-page-styles.module.css"

export default function Blog_Rampestreken() {
  const images = RampestrekenImages()
  let place = "rampestreken" //place written in markdown file
  let [title, intro, date] = getBlogExcerpt(place)

  return (
    <div className={general_blog_styles.blog_content_container}>
      <div className={general_blog_styles.blog_header}>
        <h3>{title}</h3>
        <p className={general_blog_styles.date}>{date}</p>
      </div>

        <Img
          fluid={images.img1.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of karol on a rampwalk on top of a mountain"
        />

        <p>
          {intro} There were actually lots of breaks but we did not took
          pictures along the way and just enjoyed the views and chilled in the
          car.
        </p>

        <p>
          Gigantic mountains, crystal clear rivers, streams and waterfalls,
          colourful cabins and houses entertained us along the way. It was so
          surreal seeing the gigantic Trollwall. We drove straight to
          Gjerdsetbygda Turistsenter where we stayed for our first day. The town
          was so picturesque- mountains surrounding lakes and the sea. Åndalsnes
          is known as the mountaineering capital of Norway, and it was too
          obvious seeing people who were actually in hiking attires. The
          mountain and lake views were splendid, I could live there. The
          apartment itself was cozy, spacious and relaxing, plus the host was so
          helpful. He lived in a bobil or RV just in front of the house.
        </p>

        <p>
          We took our lunch in the senter with our packed lunch, rested for a
          while and drove 10 minutes to the starting point of our hike,
          Rampestreken. Rampestreken is not as popular as Trolltunga or
          Preikestolen, but is just as wonderful as the two. It is considered a
          moderate hike, an average of 2-3hr back and forth. Even children and
          people of age can hike it. In fact we met kids and oldies along the
          hike.
        </p>

        <p>
          After the hike, we drove back to the Gjerdsetbygda and took advantage
          of the free kayaking offered in the hostel. Imagine after a 6hr drive,
          we managed to hike and do kayaking?
        </p>

        <p>Well it was the best way to end the day.</p>

        <div className={general_blog_styles.iframe_box}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9ihP5RunO10"
            title="Rampestreken"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>{" "}
        </div>

        <Img
          fluid={images.img2.childImageSharp.fluid}
          className={general_blog_styles.image}
          alt="image of a town surrounded by a lake and mountains seen from the top of a mountain"
        />

      <div className={general_blog_styles.divider}></div>
      {/* ============================================================= */}
    </div>
  )
}
