import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
// import Team from './components/Team';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <div className="bg-[#050505] text-[#f6ebef] min-h-screen">
      <LoadingScreen />
      <Header />
      <Hero />
      <Services />
      <Projects />
      {/* <Team /> */}
      <Footer />
    </div>
  );
}

export default App;