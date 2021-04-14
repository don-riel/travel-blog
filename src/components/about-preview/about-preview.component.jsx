import React from "react"
import Pulse from "react-reveal/Pulse"
import Img from "gatsby-image"

import AboutMeData from "../../queries/about-me-data"

import styles from "./about-preview-styles.module.css"
import { Link } from "gatsby"

const AboutPreview = () => {
  const data = AboutMeData()

  return (
    <div className={styles.container}>
      <Pulse>
        <div className={styles.about_container}>
          <div className={styles.about_Img_container}>
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt="a photo of me"
              className={styles.about_img}
            />
          </div>

          <div className={styles.about_Text_container}>
            <section className={styles.about_title}>
              <section className={styles.greeting}>
                <h3>Hi, I'm</h3>
              </section>

              <section className={styles.name}>
                <h3>Karol Anne</h3>
              </section>
            </section>

            <p>
              I have always wanted to create a blog about food, travel and all
              my curious wonderings about our world. Now I finally got spare
              time and started writing with a goal to give others a taste of
              what goes on in my mind, and where I have wandered.
            </p>

            <Link
              to="/about/"
              className={styles.btn_about}
              activeClassName={styles.active}
            >
              Learn More
            </Link>
          </div>
        </div>
      </Pulse>
    </div>
  )
}

export default AboutPreview
