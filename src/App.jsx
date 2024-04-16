import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import Layout from './components/Layout/Layout'
import { lazy } from 'react'

const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))


function App() {
  return (
    <Routes>
      
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='movies' element={<MoviesPage />} />
        <Route path='movies/:movieId' element={<MovieDetailsPage />} >
        <Route path='cast' element={<MovieCast />} />
        <Route path='reviews' element={<MovieReviews />} />
        </Route>
        </Route>
      
        
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
  )
}

export default App
