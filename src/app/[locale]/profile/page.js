import { Navbar_index } from "@/components/navbar";
import MainProfile from "@/components/profile/main/Main";
import { Footer } from "@/components/footer/Footer";
import { useTranslations } from "next-intl";
import Web3ModalProvider from "@/context/Web3ModalProvider";

export default function Profile() {
  const t = useTranslations("profile");

  const translations = {
    connect: t("connect"),
  };

  return (
    <Web3ModalProvider>
      <Navbar_index marquee={true} languageReload={true} />
      <MainProfile translations={translations} />
      <Footer />
    </Web3ModalProvider>
  );
}
