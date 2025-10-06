import Header from "./components/Header";
import Hero from "./components/Hero";
import LoanCategories from "./components/LoanCategories";
import Benefits from "./components/Benefits";
import EMICalculator from "./components/EMICalculator";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LoanCategories />
        <EMICalculator />
          <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
