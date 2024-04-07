/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./section7.module.css";

export const Section7 = ({ translations }) => {
  const { small, title, p_1 } = translations;
  return (
    <section className={styles.container} id="info">
      <div className={styles.limit}>
        <small>{small}</small>
        <h2>{title}</h2>
        <p>{p_1}</p>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <iframe src="https://dexscreener.com/bsc/0x03A5A1F1c66c4C0D69AA5f992E76E4aC6b1A9241?embed=1&theme=dark"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
