import Buy_index from "@/components/buy";
import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";
import { Navbar_index } from "@/components/navbar";

export default function Buy() {
  return (
    <main className={styles.main}>
      <Navbar_index />
      {/*  <SwapComponent /> */}
      <Buy_index />
      <Footer />
    </main>
  );
}
