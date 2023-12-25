import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Crousal from './components/Crousal';
import FeaturedGames from './components/FeaturedGames';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Newswire from './components/Newswire';
import TopBanner from './components/TopBanner';

function App() {
  return (
    <div className="App">
      <TopBanner/>
      <NavBar />
      <Crousal/>
      <Newswire />
      <FeaturedGames />
      <Footer/>
    </div>
  );
}

export default App;
