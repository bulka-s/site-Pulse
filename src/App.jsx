import "./styles/main.scss";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import AboutUs from "./components/About/AboutUs";
import Services from "./components/Services/Services";
import Steps from "./components/Steps/Steps";
import WhyChoose from "./components/WhyChoose/WhyChoose";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <Info />
      <AboutUs />
      <Services />
      <Steps />
      <WhyChoose />
    </>
  );
}

export default App;
