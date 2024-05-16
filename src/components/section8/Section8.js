/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import styles from "./section8.module.css";
import { FaLinkedinIn } from "react-icons/fa";

const data = [
  {
    name: "Caleb Romanos",
    p_1: "Co-Founder | CEO",
    p_2: "TourCoin Co-founder",
    linkedIn:
      "https://www.linkedin.com/in/caleb-romanos-chief-executive-office/",
    img: "https://ik.imagekit.io/mrprwema7/Tour%20Coin/caleb_1Nv0OTi0x.png?updatedAt=1715605851290",
  },
  {
    name: "Claudio Garrigo",
    p_1: "Co-Founder | CCO",
    p_2: "TourCoin Co-founder",
    linkedIn: "",
    img: "https://ik.imagekit.io/mrprwema7/Tour%20Coin/caleb_1Nv0OTi0x.png?updatedAt=1715605851290",
  },
  {
    name: "Hernán Moneta",
    p_1: "Director Tecnológico | CTO",
    p_2: "TourCoin Director Tecnológico",
    linkedIn: "https://www.linkedin.com/in/hernan-moneta/",
    img: "https://ik.imagekit.io/mrprwema7/Tour%20Coin/hernan2_RiUU4ENzo.png?updatedAt=1715608344527",
  },
  {
    name: "Johanna Graciano",
    p_1: "Director financiero | CFO",
    p_2: " TourCoin Director financiero",
    linkedIn: "https://www.linkedin.com/in/johanna-graciano-7a418a147/",
    img: "https://ik.imagekit.io/mrprwema7/Tour%20Coin/Jo_gra2_Bt5bIOeWo.png?updatedAt=1715610182255",
  },
  {
    name: "Johanna Garrigo",
    p_1: "Director de marketing | CMO",
    p_2: " TourCoin Director de marketing",
    linkedIn: "",
    img: "https://ik.imagekit.io/mrprwema7/Tour%20Coin/Jo_gra2_Bt5bIOeWo.png?updatedAt=1715610182255",
  },
  {
    name: "Sabrina Garrigo",
    p_1: "Jefe desarrollo de negocio",
    p_2: " TourCoin Jefe desarrollo de negocio",
    linkedIn: "",
    img: "https://ik.imagekit.io/mrprwema7/Tour%20Coin/Jo_gra2_Bt5bIOeWo.png?updatedAt=1715610182255",
  },
];

export const Section8 = ({ translations }) => {
  const { small, title, p_1 } = translations;
  const [screen, setScreen] = useState(0);
  return (
    <section className={styles.container} id="info">
      <div className={styles.limit}>
        <small>Nuestro Equipo</small>
        <h2>
          Conozca quiénes están detrás <br /> de todo este trabajo
        </h2>
        <p>
          Nuestro equipo está compuesto por expertos globales y profesionales
          apasionados cuya motivación y<br /> dedicación a su trabajo es
          fundamental para el éxito de <strong>TourCoin</strong>.
        </p>
        <div className={styles.wrapper}>
          <div className={styles.cards_container}>
            {data.map((item) => {
              return (
                <div className={styles.card} key={item.name}>
                  <div className={styles.team_single_img}>
                    <img
                      className={styles.individual_img}
                      src={item.img}
                      alt="Image"
                    />
                    <div className={styles.team_img}>
                      <img
                        alt="Image"
                        src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/New_Project__1_-removebg-preview__4_-removebg-preview_PoZW87wxj.png?updatedAt=1715616419876"
                      />
                    </div>
                  </div>
                  <div className={styles.team_content}>
                    <h3>{item.name}</h3>
                    <span>{item.p_1}</span>
                    <span className={styles.previous_experience}>
                      {item.p_2}
                    </span>
                    <ul>
                      <li>
                        <a
                          href={item.linkedIn}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <FaLinkedinIn color="white" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
