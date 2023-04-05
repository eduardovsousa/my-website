import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Portfolio } from './components/Portfolio';
// import { Services } from './components/Services';
import { Testimonial } from './components/Testimonial';
import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
