import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";
import { Navbar_index } from "@/components/navbar";
import { Banner_index } from "@/components/services/banner";

import { Section1_index } from "@/components/services/section1";

export default function Page() {
  return (
    <main className={styles.main}>
      <Navbar_index />
      <Banner_index />
      <Section1_index />

      <Footer />
    </main>
  );
}
