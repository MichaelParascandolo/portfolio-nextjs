import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        enableSystem={true}
        disableTransitionOnChange
      >
        <Head>
          <title>Michael Parascandolo | Full-Stack Developer</title>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="I'm a Full-Stack Developer with a
            passion for technology and a dedication to developing high-quality
            web applications."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="theme-color"
            content="#ecf0f3"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#1E1E1E"
            media="(prefers-color-scheme: dark)"
          />
        </Head>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <main className={`${pacifico.variable}`}>
            <Component {...pageProps} />
          </main>
        </motion.div>
        <Analytics />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
