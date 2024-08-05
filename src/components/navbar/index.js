import { Navbar } from "./Navbar";
import { useTranslations } from "next-intl";

export const Navbar_index = ({ marquee }) => {
  const t = useTranslations("navbar");
  const t_1 = useTranslations("marquee");

  return (
    <Navbar
      Home={t("Home")}
      TourCoin={t("TourCoin")}
      About={t("About")}
      Actives={t("Actives")}
      Language={t("Language")}
      Spanish={t("Spanish")}
      English={t("English")}
      Portuguese={t("Portuguese")}
      back={t("back")}
      buy={t("buy")}
      Community={t("Community")}
      volume={t_1("volume")}
      liquidity={t_1("liquidity")}
      marquee={marquee}
    />
  );
};
