import { useState } from 'react'
import Navbar from "./components/navbar/Navbar";
//import Detail from "./pages/Detail";
import Reviews from "./components/Reviews";
import './App.css'
import Shop from './components/Shop'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Router>
      <main className="w-full min-h-screen bg-neutral-50 flex flex-col text-neutral-600">
      <Navbar />
      <Routes>
          <Route path="/" element={<Shop />} />
          {/* <Route path="/product/:id" element={<Detail />} /> */}
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        </main>
        </Router>
    </>
  )
}

export default App
