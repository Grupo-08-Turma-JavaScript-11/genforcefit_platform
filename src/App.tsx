import { Cadastro } from './components/cadastro/Cadastro';
import { Footer } from './components/footer/Footer';
import { Hero } from './components/hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import './index.css'; 
import { Home } from './pages/home/Home';

function App() {
  return 
  <>
  <Home />;
  <Cadastro />
  <Navbar />
  <Footer />
  <Hero />


  </>
}

export default App;