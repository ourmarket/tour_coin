/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./section5.module.css";
import { useState, useEffect } from "react";

export const Section5 = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const countDownDate = new Date("Mar 30, 2024 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days < 10 ? "0" + days : days);
      setHours(hours < 10 ? "0" + hours : hours);
      setMinutes(minutes < 10 ? "0" + minutes : minutes);
      setSeconds(seconds < 10 ? "0" + seconds : seconds);

      if (distance < 0) {
        clearInterval(interval);
        // Update states for Happy New Year
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
      }
    }, 1000);

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.limit}>
        <small>Como comprar</small>
        <h2>
          Fecha de salida de <strong>Tour Coin</strong>
        </h2>
        <p>Cada vez falta menos para que puedas comprar la criptomoneda</p>
        <div className={styles.counters}>
          <div>
            <span className={styles.counter} id="days">
              {days}
            </span>
            <p className={styles.date}>Days</p>
          </div>
          <div>
            <span className={styles.counter} id="hours">
              {hours}
            </span>
            <p className={styles.date}>Hours</p>
          </div>
          <div>
            <span className={styles.counter} id="minutes">
              {minutes}
            </span>
            <p className={styles.date}>Minutes</p>
          </div>
          <div>
            <span className={styles.counter} id="seconds">
              {seconds}
            </span>
            <p className={styles.date}>Seconds</p>
          </div>
        </div>
        <p>
          ¡La felicidad se encuentra en cada Tour Coin que posees! Experimenta
          viajes innovadores y emocionantes con nuestra moneda única.
          <br /> Con Tour Coin, el mundo entero está a tu alcance. ¡Invierte en
          tu felicidad y explora nuevos horizontes con nosotros!
          <strong> #ViajesSinLimites #ViajesInnovadores</strong>
        </p>
      </div>
    </section>
  );
};
