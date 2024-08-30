import Head from "next/head";
import {
  GlobalStyle,
  SplashScreen,
  NavBar,
  Hero,
  Experience,
  About,
  Projects,
  Contact,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rudra Patel</title>
        <meta
          name="description"
          content="Rudra Patel is a third-year computer science student at the University of Tennessee"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <GlobalStyle />
      <SplashScreen />
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
