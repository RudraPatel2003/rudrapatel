import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import SplashScreen from "./components/SplashScreen";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  // Prevent animations from playing on window resize
  // https://css-tricks.com/stop-animations-during-window-resizing/
  useEffect(() => {
    let resizeTimer
    window.addEventListener("resize", () => {
      document.body.classList.add("resize-animation-stopper")
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper")
      }, 400)
    })
  }, [])

  return (
  <div className="App">
    <BrowserRouter>
      <GlobalStyle />
      <SplashScreen />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
