import Head from 'next/head'
import { GlobalStyle, SplashScreen, NavBar, Hero, About, Projects, Contact, Footer } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rudra Patel</title>
        <meta name="description" 
          content="Rudra Patel is a first-year computer science student at the University of Tennessee" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />

        {/* Google Fonts */}
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');
        </style>
      </Head>

      <GlobalStyle />
      <SplashScreen />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </> 
  )
}
