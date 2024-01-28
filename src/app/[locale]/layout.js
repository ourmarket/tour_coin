import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tour Coin - Your Guide to Travel and Cryptocurrency",
  description:
    "Explore the world of travel and cryptocurrency with Tour Coin. Learn about blockchain-powered travel solutions, discover new destinations, and earn rewards.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      {/*  <meta property="og:image" content="<generated>" />
        <meta property="og:image:alt" content="About Acme" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}

      <body className={inter.className}>{children}</body>
    </html>
  );
}
