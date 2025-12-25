import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Developer from "./components/Developer";
import Grid from "./components/Grid";
import Clients from "./components/Clients";
import Elevate from "./components/Elevate";
import Pricing from "./components/Pricing";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Developer />
      <Grid />
      <Clients />
      <Elevate />
      <Pricing />
      <Waitlist />
      <Footer />
    </section>
  );
};

export default App;
