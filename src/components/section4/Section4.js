"use client";
/* eslint-disable @next/next/no-img-element */

import styles from "./section4.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export const Section4 = ({ translations }) => {
  const { title, active_1, active_2, active_3 } = translations;
  return (
    <section className={styles.container} id="actives">
      <small>Experiencias</small>
      <h2>Algunas experiencias vividas</h2>
      <p>
        Ofrecemos una atención ágil y personalizada, apoyada en la experiencia y
        <br /> capacidad técnica de un equipo especializado.
      </p>
      <div>
        <Swiper
          spaceBetween={0}
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/DSC03239_VsUbHv6BAe.webp?updatedAt=1709248763956"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/3_zN-CB94UT.webp?updatedAt=1709249897741"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/12_e9v2qADMP.webp?updatedAt=1709252407063"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/8_42JEkU1F6.webp?updatedAt=1709252406483"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/Praia%20Grande_ofnt_2TGmy.webp?updatedAt=1709249233331"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/DJI_20240204125245_0063_D_VtINnB_Fq.webp?updatedAt=1709248763847"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/10_Z5BIFkM1Pc.webp?updatedAt=1709252406299"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/6_zHz6Yn7QCQ.webp?updatedAt=1709252406601"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={0}
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            /*  reverseDirection: true, */
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/2_7a8gUZ8L19.webp?updatedAt=1709252407078"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/5_TF1krFT3w.webp?updatedAt=1709252406237"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/11_tNQ9TjhVEw.webp?updatedAt=1709252406789"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/4_6vF4gEwot.webp?updatedAt=1709252406339"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/1_6u-pe3Bxqt.webp?updatedAt=17092524066807"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/13_sTHyLDNPA.webp?updatedAt=1709253896161"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/11%20(1)_qyV-NmeHlZ.webp?updatedAt=1709253896309"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/12%20(1)_TJxOPj94c.webp?updatedAt=1709253896441"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
