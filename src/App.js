import Home from "./pages/Home"
import Header from "./components/Header"
import { BrowserRouter, Route, Routes,  } from "react-router-dom"
import "./App.css"
import AllBeers from "./pages/AllBeers"
import Beer from "./pages/Beer"
import RandomBeer from "./pages/RandomBeer"
import NewBeer from "./pages/NewBeer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Header />} >
            <Route path="all-beers/:id" element={<Beer />} />
            <Route path="all-beers/" element={<AllBeers />} />
            <Route path="random-beers/" element={<RandomBeer />} />
            <Route path="new-beers/" element={<NewBeer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
