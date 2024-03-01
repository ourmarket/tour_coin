"use client";
import styles from "./section2.module.css";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { GoRepoForked } from "react-icons/go";
import { SiYourtraveldottv } from "react-icons/si";
import { motion } from "framer-motion";
/* import { GoStar } from "react-icons/go";
import { GoBook } from "react-icons/go"; */
/* import { GoRuby } from "react-icons/go"; */

const Card = ({ title, text, icon: Icon }) => {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>
        {Icon && <Icon size="2em" color="#eecd02" />}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};
export const Section2 = ({ translations }) => {
  const { advantages, title_3, title_4, title_5, text_3, text_5, text_4 } =
    translations;
  return (
    <section className={styles.container}>
      <div className={styles.limit}>
        <small>Beneficios</small>
        <h2>
          Beneficios de usar <strong>Tour Coin</strong>
        </h2>
        <p className={styles.sub_title}>
          Esta criptomoneda te brinda los mejores beneficios
        </p>

        <div className={styles.cards_container}>
          <div
            className={styles.card_animation}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, delay: 0.6 },
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Card title={title_3} text={text_3} icon={IoDiamondOutline} />
          </div>

          <div
            className={styles.card_animation}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, delay: 0.9 },
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Card title={title_5} text={text_5} icon={MdOutlineDiscount} />
          </div>
          <div
            className={styles.card_animation}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, delay: 1.2 },
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Card title={title_4} text={text_4} icon={SiYourtraveldottv} />
          </div>
        </div>
      </div>
    </section>
  );
};
