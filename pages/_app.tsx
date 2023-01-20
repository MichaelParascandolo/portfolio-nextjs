import "../styles/globals.css";
import Head from "next/head";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        // enableSystem={true}
        disableTransitionOnChange
        // defaultTheme="dark"
      >
        <Head>
          <title>Michael Parascandolo | Front-End Web Developer</title>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="I'm a front-end web developer specializing in building and
            designing exception digital experiences. I'm focused on building
            responsive front-end web applications using modern technologies."
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
          <Component {...pageProps} />
        </motion.div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
