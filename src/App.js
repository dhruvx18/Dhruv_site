import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/About";
import Works from "./components/Works/works";
import Exp from "./components/Exp/exp";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Works/>
      <Exp/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
