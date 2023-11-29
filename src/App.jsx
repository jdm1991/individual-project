import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import IceBath from './IceBath'
import WorkoutTracker from './WorkoutTracker'
import Mindfulness from './Mindfulness'
import Resources from './Resources'
import Contact from './Contact'
import Home from './Home'

import './App.css'

export default function App() {
  return (
    
      <Router>
        <header className="App-header">
          <Header />
          <Navbar />
        </header>
        <main className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/icebath" element={<IceBath />} />
            <Route path="/workout-tracker" element={<WorkoutTracker />} />
            <Route path="/mindfulness" element={<Mindfulness />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </main>
      </Router>
  );
}
