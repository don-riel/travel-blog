import React from "react"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

import TelemarkImages from ".././../../queries/telemark-images"
import getBlogExcerpt from "../../../utils/getBlogExcerpt"

import general_blog_styles from "../blog-page-styles.module.css"

export default function Blog_Telemark() {
  const images = TelemarkImages()
  let place = "telemark" //place written in markdown file
  let [title, intro, date] = getBlogExcerpt(place)

  return (
    <div className={general_blog_styles.blog_content_container}>
      <div className={general_blog_styles.blog_header}>
        <h3>{title}</h3>
        <p className={general_blog_styles.date}>{date}</p>
      </div>

      <Fade bottom>
        <p>{intro}</p>
      </Fade>

      <Fade bottom>
        <Img
          fluid={images.img2.childImageSharp.fluid}
          className={general_blog_styles.image}
        />
      </Fade>

      <Fade bottom>
        <p>
          This was the view going to the hytte---beautiful landscape with lush
          green grasses, blooming spring flowers, apple and pear trees,
          surrounded by majestic mountains and a glass looking lake. The typical
          red painted Norwegian houses gave a colourful contrast to the view.
          The serene environment granted me the escape I badly needed.
        </p>
      </Fade>

      <div className={general_blog_styles.img_flex}>
        <div>
          <Fade bottom>
            <Img
              fluid={images.img3.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <Img
              fluid={images.img4.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <Img
              fluid={images.img5.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <Img
              fluid={images.img6.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <Img
              fluid={images.img7.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <Img
              fluid={images.img8.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
          </Fade>
        </div>
      </div>

      <Fade bottom>
        <p>
          This was our home for the weekend. This picture doesn't even give
          justice how magical this place is. The host welcomed us and even left
          us two bottles of homemade apple juice from their farm.
        </p>
      </Fade>

      <Fade bottom>
        <Img
          fluid={images.img9.childImageSharp.fluid}
          className={general_blog_styles.flex_img}
        />
      </Fade>

      <Fade bottom>
        <p>
          Here is the link to the AirBnb:{" "}
          <a href="https://www.airbnb.com/rooms/20165711?source_impression_id=p3_1564047600_62nabOYPa6ymG2qR">
            https://www.airbnb.com/rooms
          </a>
        </p>
      </Fade>

      <Fade bottom>
        <p>
          We sat on the sofa and opened the large window which displayed this
          surreal view of the Norsjø Lake. We sat there for hours embracing the
          calmness, hearing birds and splash of the water to the stones and
          watching how fast the clouds have covered the sun. It was just plain
          peacefulness. It was just us enjoying nature which happens to be the
          best company at the moment.
        </p>
      </Fade>

      <Fade bottom>
        <Img
          fluid={images.img10.childImageSharp.fluid}
          className={general_blog_styles.flex_img}
        />
      </Fade>

      <Fade bottom>
        <p>
          We went for an hour fishing just down the cabin but we did not have
          luck that day.
        </p>
      </Fade>

      <Fade bottom>
        <Img
          fluid={images.img11.childImageSharp.fluid}
          className={general_blog_styles.flex_img}
        />
      </Fade>

      <Fade bottom>
        <p>
          It was getting chillier so we opted to go back and prepare our dinner.
          We had grilled food and beer at the balcony, while we enjoyed the
          magnificent view.{" "}
        </p>
      </Fade>
      <Fade bottom>
        <p>
          Right after we finished wrapping up dinner and cleaned the balcony, it
          started pouring. It actually rained cats and dogs for a while. It was
          the perfect time to get inside and freshen up.
        </p>
      </Fade>
      <Fade bottom>
        <p>
          We chilled on the couch and watched the pouring rain. Imagine the
          sound of raindrops while just seating and looking at this view.{" "}
        </p>
      </Fade>

      <Fade bottom>
        <Img
          fluid={images.img12.childImageSharp.fluid}
          className={general_blog_styles.flex_img}
        />
      </Fade>

      <Fade bottom>
        <p>
          And just before the sun was about to set, it stopped raining and this
          perfect blue-pink-violet- well, I can´t even describe hue appeared
          right in front of us. It was an hour before midnight and we were
          yearning to have a comfortable sleep.
        </p>
      </Fade>

      <Fade bottom>
        <Img
          fluid={images.img15.childImageSharp.fluid}
          className={general_blog_styles.flex_img}
        />
      </Fade>
      <Fade bottom>
        <Img
          fluid={images.img16.childImageSharp.fluid}
          className={general_blog_styles.flex_img}
        />
      </Fade>

      <Fade bottom>
        <p>We just grabbed our blankets, went outside and took this photo.</p>
      </Fade>
      <Fade bottom>
        <p>
          Earlier during the day, we stopped by Vrangfoss Sluser and watched how
          the facility works.
        </p>
      </Fade>
      <Fade bottom>
        <p>
          <a href="https://www.telemarkskanalen.no">
            https://www.telemarkskanalen.no
          </a>
        </p>
      </Fade>

      <Fade bottom>
        <Img
          fluid={images.img17.childImageSharp.fluid}
          className={general_blog_styles.flex_img}
        />
      </Fade>

      <Fade bottom>
        <p>
          On our way back to Oslo, we visited the village of Notodden, a UNESCO
          World Heritage Site, and drove to Heddal Stavkirke. The church was so
          magical that I felt like I was in a fairytale setting.
        </p>
      </Fade>

      <div className={general_blog_styles.img_flex}>
        <div>
          <Fade bottom>
            <Img
              fluid={images.img18.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <Img
              fluid={images.img19.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <Img
              fluid={images.img20.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <Img
              fluid={images.img21.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <Img
              fluid={images.img22.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
          </Fade>
        </div>
        <div>
          <Fade bottom>
            <Img
              fluid={images.img23.childImageSharp.fluid}
              className={general_blog_styles.flex_img}
            />
          </Fade>
        </div>
      </div>

      <Fade bottom>
        <p>
          Watch the video to see how beautiful Telemark is. If you ask someone
          which place do they recommend to go in Norway, you can seldom hear
          Telemark. Well, I was one of those until we came here and experienced
          it ourselves.
        </p>
      </Fade>

      <Fade bottom>
        <div className={general_blog_styles.iframe_box}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QfMEnEbpKv4"
            title="Hyttetur in Telemark "
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>{" "}
        </div>
      </Fade>

      <div className={general_blog_styles.divider}></div>
      {/* ============================================================= */}
    </div>
  )
}
