import React from "react"
import Img from "gatsby-image"

import SocialMedia from "../../queries/social-media-images"
import styles from "./footer-styles.module.css"

const Footer = () => {
  const images = SocialMedia()

  return (
    <div className={styles.footer}>
      <div className={styles.social_media}>
        <p className={styles.section_title}>Follow me</p>

        <div className={styles.social_icons}>
          <a href="https://www.youtube.com/channel/UCYxJshfIpMfvvc7psztDWiw/featured" className={styles.social_link}>
            <Img
              fluid={images.youtube.childImageSharp.fluid}
              alt="email icon"
              className={styles.social_media_img}
            />
            <span>YouTube</span>
          </a>
          <a href="https://www.facebook.com/karolanne.ramoran" className={styles.social_link}>
            <Img
              fluid={images.facebook.childImageSharp.fluid}
              alt="email icon"
              className={styles.social_media_img}
            />
            <span>Facebook</span>
          </a>

          <a href="https://www.instagram.com/imannakarolina/" className={styles.social_link}>
            {" "}
            <Img
              fluid={images.instagram.childImageSharp.fluid}
              alt="email icon"
              className={styles.social_media_img}
            />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    
      <div className={styles.contact_info}>
        <p className={styles.section_title}>Contact</p>

        <div className={styles.email_info}>
          <Img
            fluid={images.email.childImageSharp.fluid}
            alt="email icon"
            className={styles.social_media_img}
          />
          <span className={styles.email_text}>karolannebramoran@gmail.com</span>
        </div>
      </div>


      <div className={styles.copyright}>
        <p>Copyright © {new Date().getFullYear()} Karol Anne</p>
      </div>
    </div>
  )
}

export default Footer
