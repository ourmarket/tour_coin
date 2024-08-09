import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";
import { Navbar_index } from "@/components/navbar";
import ConnectBtn from "@/components/profile/connectBtn/ConnectBtn";
import MainProfile from "@/components/profile/main/Main";
import Web3ModalProvider from "@/context/Web3ModalProvider";

export default function Profile() {
  return (
    <Web3ModalProvider>
      <main className={styles.main}>
        <Navbar_index />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 1000,
          }}
        >
          <MainProfile />
        </div>
        <Footer />
      </main>
    </Web3ModalProvider>
  );
}
