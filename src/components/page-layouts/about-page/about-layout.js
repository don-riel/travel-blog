import React from "react"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

import AboutMeData from "../../../queries/about-me-data"
import BlogWidget from "../../blog-widget/blog-widget"

import styles from "./about-styles.module.css"

export default function AboutPage() {
  const data = AboutMeData()

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.img_box}>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt="a photo of me"
          className={styles.aboutImage}
        />
      </div>

      <div className={styles.middle}>
        <Fade left>
          <div className={`${styles.content_box} ${styles.light}`}>
            <div className={styles.border_left}>
              <h3>About Me</h3>
              <p>
                I am a fulltime engineer working in Oslo, Norway, and writing
                this blog is one of my hobbies. ​ <br />
                <br />
                I´m from Ilocos Norte, Philippines, and moved to Norway in
                autumn of 2015.
              </p>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className={`${styles.content_box} ${styles.dark}`}>
            <div className={styles.border_right}>
              <p>
                I have always wanted to create a blog about food, travel and all
                my curious wonderings about our world.
                <br />
                <br />
                Now I finally got spare time and started writing with a goal to
                give others a taste of what goes on in my mind, and where I have
                wandered. Take some time to explore the blog, read something
                interesting, and feel free to reach out if you have questions.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div>
        <BlogWidget />
      </div>
    </div>
  )
}
