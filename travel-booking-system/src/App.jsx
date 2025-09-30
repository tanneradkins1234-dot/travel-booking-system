import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup'; 
import { TermsService } from './Pages/TermsService';
import { Flights } from './Pages/Home-Flights';
import { CarRentals } from './Pages/Home-Car-Rentals';
import { Layout } from './Pages/Components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />}/> 
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/TermsService" element={<TermsService />}/>        
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />}/> 
          <Route path="/Home-Flights" element={<Flights />}/>
          <Route path="/Home-Car-Rentals" element={<CarRentals />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
