import Footer from "../Footer";
import About from "./About/About";
import Contact from "./Contact";
import Hero from "./Hero";

const index = () => {
  return (
    <main className="h-screen overflow-y-auto snap snap-y snap-mandatory scrollbar-hide scroll-smooth scroll-my-6">
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default index;
