import { Navbar } from "./Navbar";
import { useTranslations } from "next-intl";

export const Navbar_index = () => {
  const t = useTranslations("navbar");

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
    />
  );
};
