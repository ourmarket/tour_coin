import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";
import { Navbar_index } from "@/components/navbar";
import { Rooms_index } from "@/components/services/rooms";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar_index />
      <Rooms_index />
      <Footer />
    </main>
  );
}
