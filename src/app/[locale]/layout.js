import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TourCoin - Your Guide to Travel and Cryptocurrency",
  description:
    "Explore the world of travel and cryptocurrency with TourCoin. Learn about blockchain-powered travel solutions, discover new destinations, and earn rewards.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children, params: { locale } }) {
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
      {/*  <meta property="og:image" content="<generated>" />
        <meta property="og:image:alt" content="About Acme" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}

      <body className={inter.className}>{children}</body>
    </html>
  );
}
