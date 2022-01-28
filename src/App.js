import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FeaturedGames from './components/FeaturedGames';
import Newswire from './components/Newswire';

function App() {
  return (
    <div className="App">
      <Newswire />
      <FeaturedGames/>
    </div>
  );
}

export default App;
