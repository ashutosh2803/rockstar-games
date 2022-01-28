import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FeaturedGames from './components/FeaturedGames';
import Footer from './components/Footer';
import Newswire from './components/Newswire';

function App() {
  return (
    <div className="App">
      <Newswire />
      <FeaturedGames />
      <Footer/>
    </div>
  );
}

export default App;
