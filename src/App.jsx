
import './App.css';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import WatchHistory from './Pages/WatchHistory';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes> 
      <Route path='/' element={<LandingPage/>}/>
       <Route path='/Home' element={<Home/>}/>
       <Route path='/WatchHistory' element={<WatchHistory/>}/>
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
