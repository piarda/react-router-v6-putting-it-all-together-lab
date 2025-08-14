import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const DirectorContainer = () => {
  const [directors, setDirectors] = useState([]);

  // Fetch directors from API
  useEffect(() => {
    fetch('http://localhost:4000/directors') // API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch directors');
        }
        return response.json();
      })
      .then((data) => setDirectors(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <h1>Welcome to the Director's Directory!</h1>

        {/* Pass directors to Outlet context for nested routes */}
        <Outlet context={{ directors }} /> 
        {/* This makes the 'directors' state available to child components using useOutletContext */}
      </main>
    </>
  );
};

export default DirectorContainer
