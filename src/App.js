import './App.css';
import Navbar from './components/HomePage/Navbar';
import MainContent from './components/HomePage/MainContent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './components/ContactPage';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ margin: '0', padding: '0', top: '0' }}>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' Component={MainContent}/>
          <Route path='/contactpage' Component={ContactPage}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
