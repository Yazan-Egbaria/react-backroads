import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Featured />
      <Footer />
    </>
  );
}
