import { Container } from "react-bootstrap"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Store from "./pages/Store"
import Navbar from "./components/Navbar"
import {ShopingCartProvider} from "./context/ShopingCartContext"

function App() {
  return (
    <>
      <ShopingCartProvider>
        <Navbar />
        <Container className="py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </Container>
      </ShopingCartProvider>
    </>
  )
}

export default App
