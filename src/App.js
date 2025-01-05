import './App.css';
import Navbar from './components/HomePage/Navbar';
import Offer from './components/HomePage/Offer';
import Explore from './components/HomePage/Explore';
import Trending from './components/HomePage/Trending';
import Browse from './components/HomePage/Browse';
import Quick from './components/HomePage/Quick';
import Deals from './components/HomePage/Deals';
import Inspiration from './components/HomePage/Inspiration';
import Travel from './components/HomePage/Travel';
import Destination from './components/HomePage/Destination';
import Tags from './components/HomePage/Tags';
import Footer from './components/HomePage/Footer';
import MainContent from './components/HomePage/MainContent';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ margin: '0', padding: '0', top: '0' }}>
      <Navbar />
      <MainContent/>
      <Offer />
      <Trending />
      <Explore />
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
