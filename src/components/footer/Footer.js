import { useTranslations } from "next-intl";
import styles from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
export const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>{t("title_1")}</h4>
            <ul>
              <li>
                <Link href="/#tour_coin">{t("link_1")}</Link>
              </li>
              <li>
                <Link href="/#actives">{t("link_2")}</Link>
              </li>
              <li>
                <Link href="/#mission">{t("link_3")}</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>{t("title_2")}</h4>
            <ul>
              <li>
                <a href="mailto: info@tour-coin.com">Email</a>
              </li>

              <li>
                <a href="https://wa.link/t1rj0k" target="_blank">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://t.me/TourCoin_crypto">Telegram</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>{t("title_3")}</h4>
            <ul>
              <li>
                <a href="https://pancakeswap.finance/" target="_blank">
                  PancakeSwap
                </a>
              </li>
              <li>
                <a href="https://metamask.io/" target="_blank">
                  MetaMask
                </a>
              </li>
              <li>
                <a
                  href="https://bscscan.com/address/0x04d228b15111db88729735075dcf6a9b02e6a1b1#events"
                  target="_blank"
                >
                  BscScan
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>{t("title_4")}</h4>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/profile.php?id=61556760126525"
                target="_blank"
              >
                <FaFacebookF size="1.4em" />
              </a>
              <a
                href="https://www.instagram.com/tourcoin_crypto"
                target="_blank"
              >
                <FaInstagram size="1.4em" />
              </a>
              <a
                href="https://www.tiktok.com/@tour_coin_crypto"
                target="_blank"
              >
                <FaTiktok size="1.4em" />
              </a>
              <a href="https://twitter.com/Tourcoin_crypto" target="_blank">
                <FaXTwitter size="1.4em" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.made}>
        <small>
          {" "}
          &copy; {new Date().getFullYear()}, made with ❤ by{" "}
          <a target="_blank" href="https://www.ourmarket.com.ar">
            OurMarket
          </a>
        </small>
      </div>
    </footer>
  );
};
