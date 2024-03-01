"use client";
/* eslint-disable @next/next/no-img-element */

import styles from "./section3.module.css";
import { motion } from "framer-motion";

export const Section3 = ({ translations }) => {
  const { title, text } = translations;
  return (
    <section className={styles.container} id="about">
      <div className={styles.limit}>
        <small>Misión y vision</small>
        <h2>Una mirada al futuro</h2>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  delay: 0.3,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Misión
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  delay: 0.6,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Facilitar experiencias de viaje felices y sin preocupaciones al
              ofrecer una criptomoneda única, TourCoin. Queremos ser la llave
              que desbloquea momentos inolvidables y sonrisas en cada destino.
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  delay: 0.3,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Visión
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  delay: 0.6,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Revitalizar la alegría en los viajes a través de Tour Coin,
              convirtiéndonos en la moneda de la felicidad para explorar el
              mundo.
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  delay: 0.3,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Valores
            </motion.h2>
            <ul>
              <li>
                <strong>Felicidad Primero:</strong> Colocamos la alegría del
                viajero en el centro de nuestras acciones.
              </li>
              <li>
                <strong>Empoderamiento Financiero:</strong> Brindamos libertad y
                felicidad a través de transacciones seguras y transparentes.
              </li>
              <li>
                <strong>Conexión Humana:</strong> Buscamos enriquecer la vida de
                las personas al conectarlas con experiencias auténticas.
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.img_wrapper}>
              <img
                src="https://www.pngmart.com/files/23/Blockchain-PNG-HD-Isolated.png"
                alt="Beach Celso Ramos"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
