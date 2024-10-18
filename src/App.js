import './App.css';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Explore from './components/Explore';
import Trending from './components/Trending';
import Browse from './components/Browse';
import Quick from './components/Quick';
import Deals from './components/Deals';
import Inspiration from './components/Inspiration';
import Travel from './components/Travel';
import Destination from './components/Destination';
import Tags from './components/Tags';
import Footer from './components/Footer';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ margin: '0', padding: '0', top: '0' }}>
      <Navbar />
      <Offer />
      <Explore />
      <Trending />
      <Browse />
      <Quick />
      <Deals />
      <Inspiration />
      <Travel />
      <Destination />
      <Tags />
      <Footer />
    </div>
  );
}

export default App;
