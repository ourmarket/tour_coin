import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Whatsapp } from "@/components/whatsapp";
import Providers from "@/redux/Provider";

const inter = Inter({ subsets: ["latin"] });

async function fetchTitle() {
  const res = await fetch(
    "https://api.dexscreener.com/latest/dex/tokens/0x34B08ccf9620aEd6d158BaE65e85Bb3bBe2c384A",
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  if (data.pairs) {
    return `$${data?.pairs[0]?.priceUsd}`;
  } else {
    return "";
  }
}

export async function generateMetadata() {
  const price = await fetchTitle();

  return {
    title: `TRC ${price} - Your Guide to Travel and Cryptocurrency`,
    description:
      "Explore the world of travel and cryptocurrency with TourCoin. Learn about blockchain-powered travel solutions, discover new destinations, and earn rewards.",
    icons: {
      icon: "/icon.png",
    },
  };
}

export default async function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2ZWLLXWXD0"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2ZWLLXWXD0');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        <div>
          <Whatsapp />
        </div>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
