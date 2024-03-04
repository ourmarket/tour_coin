"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0 } },
};
const menuAnimate = {
  initial: { opacity: 0, x: -150 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Menu = ({ translate, setMobile }) => {
  const {
    Home,
    TourCoin,
    About,
    Actives,
    Language,
    Spanish,
    English,
    Portuguese,
    back,
  } = translate;
  const [menu, setMenu] = useState(false);
  return (
    <motion.div
      className={styles.menu_mobile}
      initial={{ opacity: 1, y: "-100%" }}
      animate={{
        opacity: 1,
        y: "0%",
        transition: { duration: 0.4 },
      }}
      exit={{ y: "-110%" }}
    >
      <div className={styles.btn_close} onClick={() => setMobile(false)}>
        <IoMdClose size={"3rem"} />
      </div>
      <div
        className={
          !menu
            ? styles.menu_mobile_container
            : styles.menu_mobile_container_active
        }
      >
        <ul className={styles.menu_mobile_links}>
          <li>
            <Link href="/#home" onClick={() => setMobile(false)}>
              {Home}
            </Link>
          </li>
          <li>
            <Link href="/#tour_coin" onClick={() => setMobile(false)}>
              {TourCoin}
            </Link>
          </li>
          <li>
            <Link href="/#actives" onClick={() => setMobile(false)}>
              {Actives}
            </Link>
          </li>
          <li>
            <Link href="/#mission" onClick={() => setMobile(false)}>
              {About}
            </Link>
          </li>

          <li
            onClick={() => setMenu(true)}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#eecd02",
              position: "relative",
            }}
          >
            {Language}
            <GoChevronRight style={{ top: "3px", position: "relative" }} />
          </li>
        </ul>
        <ul className={styles.menu_mobile_links}>
          <li>
            <Link href={"es"} onClick={() => setMobile(false)}>
              {Spanish}
            </Link>
          </li>
          <li>
            <Link href={"en"} onClick={() => setMobile(false)}>
              {English}
            </Link>
          </li>
          <li>
            <Link href={"pt"} onClick={() => setMobile(false)}>
              {Portuguese}
            </Link>
          </li>
          <li
            onClick={() => setMenu(false)}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#eecd02",
              position: "relative",
              left: "-7px",
            }}
          >
            <GoChevronLeft style={{ top: "2px", position: "relative" }} />
            {back}
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export const Navbar = ({
  Home,
  TourCoin,
  About,
  Actives,
  Language,
  Spanish,
  English,
  Portuguese,
  back,
  buy,
}) => {
  const [menu, setMenu] = useState(false);
  const [mobile, setMobile] = useState(false);

  const translate = {
    Home,
    TourCoin,
    About,
    Actives,
    Language,
    Spanish,
    English,
    Portuguese,
    back,
    buy,
  };
  return (
    <header>
      <AnimatePresence>
        {mobile && <Menu translate={translate} setMobile={setMobile} />}
      </AnimatePresence>

      <motion.nav
        className={styles.navbar}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,

          transition: { duration: 0.5 },
        }}
      >
        <div className={styles.container}>
          <div className={styles.center}>
            <Link href={"/"}>
              <Image
                className={styles.logo}
                src="/3.png"
                alt="Logo"
                width={180}
                height={50}
                priority
              />
            </Link>
          </div>
          <div>
            <ul className={styles.links}>
              <li>
                <Link href="/#home" onClick={() => setMobile(false)}>
                  {Home}
                </Link>
              </li>
              <li>
                <Link href="/#tour_coin" onClick={() => setMobile(false)}>
                  {TourCoin}
                </Link>
              </li>
              <li>
                <Link href="/#actives" onClick={() => setMobile(false)}>
                  {Actives}
                </Link>
              </li>
              <li>
                <Link href="/#about" onClick={() => setMobile(false)}>
                  {About}
                </Link>
              </li>

              <li
                style={{ display: "flex", alignItems: "center" }}
                onClick={() => setMenu(!menu)}
                className={styles.btn_lang}
              >
                {Language}
                <GoChevronRight />
              </li>
            </ul>
          </div>
          <div>
            <button className={styles.btn_buy}>
              <Link href="/#buy">{buy}</Link>
            </button>
          </div>
          <div className={styles.links_mobile} onClick={() => setMobile(true)}>
            <IoMenu size={"3rem"} color={"#eecd02"} />
          </div>
        </div>
      </motion.nav>
      <div className={menu ? styles.menu_active : styles.menu}>
        <ul>
          <li>
            <Link
              href={"es"}
              onClick={() => {
                setMenu(!menu);
              }}
            >
              {Spanish}
            </Link>
          </li>
          <li>
            <Link href={"en"} onClick={() => setMenu(!menu)}>
              {English}
            </Link>
          </li>
          <li>
            <Link href={"pt"} onClick={() => setMenu(!menu)}>
              {Portuguese}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
