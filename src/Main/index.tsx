import Footer from "../Footer";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";

const index = () => {
  return (
    <main className="h-screen overflow-y-auto snap snap-y snap-mandatory scrollbar-hide scroll-smooth scroll-my-6">
      <Header />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default index;
