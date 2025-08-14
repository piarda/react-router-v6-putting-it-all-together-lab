import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import DirectorContainer from './pages/DirectorContainer';
import DirectorList from './pages/DirectorList';
import DirectorCard from './pages/DirectorCard';
import DirectorForm from './pages/DirectorForm';
import MovieCard from './pages/MovieCard';
import MovieForm from './pages/MovieForm';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Directors route (with nested routes) */}
        <Route path="/directors" element={<DirectorContainer />}>
          <Route index element={<DirectorList />} />
          
          <Route path="new" element={<DirectorForm />} />
          
          {/* This is the key change to fix your routing */}
          {/* The :id route now serves as a layout for its children */}
          <Route path=":id" element={<DirectorCard />}>
            {/* Nested route for a specific movie */}
            <Route path="movies/:movieId" element={<MovieCard />} />

            {/* Nested route for adding a new movie */}
            <Route path="movies/new" element={<MovieForm />} />
          </Route>
        </Route>

        <Route path="/about" element={<About />} />

        {/* Fallback for 404 pages */}
        <Route path="*" element={<h2>404: Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
