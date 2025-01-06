import './App.css';
import MainContent from './components/HomePage/MainContent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './components/ContactPage';
import ListProperty from './components/ListProperty'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ margin: '0', padding: '0', top: '0' }}>
      <Router>
        <Routes>
          <Route path='/' Component={MainContent}/>
          <Route path='/contactpage' Component={ContactPage}/>
          <Route path='/list' Component={ListProperty}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
