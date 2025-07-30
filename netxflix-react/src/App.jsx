import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyHeader from './componets/MyHeader'
import MyFooter from './componets/MyFooter'
import MyMain from './componets/MyMain'
import TvShows from './componets/TvShows'
import MovieDetails from './componets/MovieDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <MyHeader />
      <Routes>
        <Route path="/" element={<MyMain />}></Route>
        <Route
          path="/movie-details/:movieID "
          element={<MovieDetails />}
        ></Route>
        <Route path="/tvshows" element={<TvShows />}></Route>
      </Routes>
      <MyFooter />
    </BrowserRouter>
  )
}

export default App
