import React from "react"
import Img from "gatsby-image"

import SocialMedia from "../../queries/social-media-images"
import styles from "./footer-styles.module.css"

const Footer = () => {
  const images = SocialMedia()

  return (
    <div className={styles.footer}>
      <div className={styles.contact_info}>
        <p>Contact</p>

        <div className={styles.email_info}>
          <Img
            fluid={images.email.childImageSharp.fluid}
            alt="email icon"
            className={styles.social_media_img}
          />
          <p className={styles.email_text}>karolramoran@gmail.com</p>
        </div>
      </div>

      <div className={styles.social_media}>
        <p>Follow me</p>

        <div className={styles.social_icons}>
          <a href="https://www.youtube.com/channel/UCYxJshfIpMfvvc7psztDWiw/featured">
            <Img
              fluid={images.youtube.childImageSharp.fluid}
              alt="email icon"
              className={styles.social_media_img}
            />
          </a>
          <a href="https://www.facebook.com/karolanne.ramoran">
            <Img
              fluid={images.facebook.childImageSharp.fluid}
              alt="email icon"
              className={styles.social_media_img}
            />
          </a>

          <a href="https://www.instagram.com/imannakarolina/">
            {" "}
            <Img
              fluid={images.instagram.childImageSharp.fluid}
              alt="email icon"
              className={styles.social_media_img}
            />
          </a>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © {new Date().getFullYear()} Karol Anne</p>
      </div>
    </div>
  )
}

export default Footer
