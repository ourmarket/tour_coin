"use client";
/* eslint-disable @next/next/no-img-element */

import styles from "./section4.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";

export const Section4 = ({ translations }) => {
  const { small, title, p_1 } = translations;
  const [slidesToShow, setSlidesToShow] = useState(6);

  // Función para calcular el número de imágenes a mostrar basado en el ancho de la pantalla
  const calculateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    let slides = 6;

    // Puedes ajustar estos valores según tus necesidades
    if (screenWidth <= 768) {
      slides = 4;
    }
    if (screenWidth <= 576) {
      slides = 2;
    }

    // Actualizar el estado con el nuevo valor de slidesToShow
    setSlidesToShow(slides);
  };

  // Llamar a la función al cargar y al redimensionar la ventana
  useEffect(() => {
    calculateSlidesToShow();
    window.addEventListener("resize", calculateSlidesToShow);
    return () => {
      window.removeEventListener("resize", calculateSlidesToShow);
    };
  }, []);
  return (
    <section className={styles.container} id="actives">
      <small>{small}</small>
      <h2>{title}</h2>
      <p>{p_1}</p>
      <div>
        <Swiper
          spaceBetween={0}
          slidesPerView={slidesToShow}
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
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712712430%20(10)_0Tmd8kUqg.webp?updatedAt=1712933442032"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712712430%20(26)__5KKag4Tq.jpg?updatedAt=1712934067375"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712712430%20(4)_RxHdCF2Hk.webp?updatedAt=1712933441915"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712712430%20(27)_-ubav8THG.jpg?updatedAt=1712934067155"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712712430_8npYxclX7.webp?updatedAt=1712933441872"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712712430%20(19)_EWtjfwSOk.webp?updatedAt=1712934416341"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712712430%20(7)%20(1)_vAZ2b1iV-.webp?updatedAt=1712934067152"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712866097%20(8)_tvyFRpxmX.jpg?updatedAt=1712935174087"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={0}
          slidesPerView={slidesToShow}
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
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712712430%20(28)_zmEv7-GgF.webp?updatedAt=1712934067584"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712712430%20(18)_p3_ModQYN.webp?updatedAt=1712935174380"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712712430%20(25)_XLTM79rIB.webp?updatedAt=1712934067578"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712866097%20(2)_tMkzjxZHU.webp?updatedAt=17129351743409"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712712430%20(14)_-ImB6zvR0.webp?updatedAt=1712935174161"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712866097%20(10)_D_ujCNltMw.jpg?updatedAt=17129351742521"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712712430%20(12)_DCoAK-A32.webp?updatedAt=1712935174415"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/photo1712712430%20(23)_bd4Sqf5Jd.webp?updatedAt=1712935174272"
                alt="TourCoin event"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
