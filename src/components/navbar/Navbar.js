"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import { Link } from "../../navigation";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import LanguageChanger from "../languageChanger/LanguageChanger";
import { useRouter, usePathname } from "../../navigation";

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
    buy,
    Community,
  } = translate;
  const [menu, setMenu] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (language) => {
    router.push(pathname, { locale: language });
  };
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
            <Link href="/alliances" onClick={() => setMobile(false)}>
              {Actives}
            </Link>
          </li>

          <li>
            <Link href="/#mission" onClick={() => setMobile(false)}>
              {About}
            </Link>
          </li>
          <li>
            <Link href="/community" onClick={() => setMobile(false)}>
              {Community}
            </Link>
          </li>
          <li>
            <Link href="/tutorials" onClick={() => setMobile(false)}>
              {buy}
            </Link>
          </li>

          <li
            onClick={() => setMenu(true)}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#f9ba32",
              position: "relative",
            }}
          >
            {Language}
            <GoChevronRight style={{ top: "3px", position: "relative" }} />
          </li>
        </ul>
        <ul className={styles.menu_mobile_links}>
          <li
            onClick={() => {
              setMobile(false);
              handleChange("es");
            }}
          >
            {Spanish}
          </li>
          <li
            onClick={() => {
              setMobile(false);
              handleChange("en");
            }}
          >
            {English}
          </li>
          <li
            onClick={() => {
              setMobile(false);
              handleChange("pt");
            }}
          >
            {Portuguese}
          </li>
          <li
            onClick={() => setMenu(false)}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#f9ba32",
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
  Community,
}) => {
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
    Community,
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
                src="/logo_final.png"
                alt="Logo"
                width={190}
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
                <Link href="/alliances" onClick={() => setMobile(false)}>
                  {Actives}
                </Link>
              </li>

              <li>
                <Link href="/community" onClick={() => setMobile(false)}>
                  {Community}
                </Link>
              </li>

              <li>
                <LanguageChanger language={Language} />
              </li>
            </ul>
          </div>
          <div>
            <button className={styles.btn_buy}>
              <Link href="/tutorials">{buy}</Link>
            </button>
          </div>
          <div className={styles.links_mobile} onClick={() => setMobile(true)}>
            <IoMenu size={"3rem"} color={"#f9ba32"} />
          </div>
        </div>
      </motion.nav>
    </header>
  );
};
