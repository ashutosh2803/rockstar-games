import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FeaturedGames from './components/FeaturedGames';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Newswire from './components/Newswire';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Newswire />
      <FeaturedGames />
      <Footer/>
    </div>
  );
}

export default App;
