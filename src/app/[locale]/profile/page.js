import Web3ModalProvider from "@/context/Web3ModalProvider";
import { Navbar_index } from "@/components/navbar";
import MainProfile from "@/components/profile/main/Main";
import { Footer } from "@/components/footer/Footer";

export default function Profile() {
  return (
    <Web3ModalProvider>
      <Navbar_index marquee={true} />
      <MainProfile />
      <Footer />
    </Web3ModalProvider>
  );
}
