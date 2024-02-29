/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./banner.module.css";
import { motion } from "framer-motion";

const menuAnimate = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};
const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const Banner = ({ title, button }) => {
  return (
    <section
      className={styles.banner_section}
      id="home"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
    >
      <div className={styles.banner_bg}></div>
      <div className={styles.over_shape}>
        <img
          className={styles.animation_one}
          src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/animate1_zZOz1aQyq.png?updatedAt=1709213142130"
          alt="Image"
        />
        <img
          className={styles.animation_two}
          src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/animate2_Rah5x5sQa.png?updatedAt=1709213142043"
          alt="Image"
        />
        <img
          className={styles.animation_three}
          src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/animate3_NG19MQEsc.png?updatedAt=1709213141883"
          alt="Image"
        />
      </div>
      <div></div>
      <div>
        <div className={styles.banner_container}>
          <div className={styles.wrapper}>
            <div className={styles.wrapper_flex}>
              <div
                className={styles.banner_title}
                initial={"initial"}
                animate={"animate"}
                transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
              >
                <h1 variants={menuAnimate}>Tour Coin</h1>
                <h6 variants={menuAnimate}>{title}</h6>
                <button variants={menuAnimate}>{button}</button>
              </div>
              <div className={styles.banner_video}>
                <div className={styles.banner_video_container}>
                  <div className={styles.video_one}>
                    <video
                      className={styles.video_bg}
                      autoPlay
                      loop
                      muted
                      preload="true"
                    >
                      <source
                        type="video/mp4"
                        src="https://player.vimeo.com/external/182638846.hd.mp4?s=32bdf2fd96d97eda7e57476efdadb1a6cc536cd2&amp;profile_id=119"
                      />
                    </video>
                  </div>
                  <div className={styles.video_two}>
                    <video
                      className={styles.video_bg}
                      autoPlay
                      loop
                      muted
                      preload="true"
                    >
                      <source
                        type="video/mp4"
                        src="https://player.vimeo.com/external/182638846.hd.mp4?s=32bdf2fd96d97eda7e57476efdadb1a6cc536cd2&amp;profile_id=119"
                      />
                    </video>
                  </div>
                  <div className={styles.video_three}>
                    <video
                      className={styles.video_bg}
                      autoPlay
                      loop
                      muted
                      preload="true"
                    >
                      <source
                        type="video/mp4"
                        src="https://player.vimeo.com/external/182638846.hd.mp4?s=32bdf2fd96d97eda7e57476efdadb1a6cc536cd2&amp;profile_id=119"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
