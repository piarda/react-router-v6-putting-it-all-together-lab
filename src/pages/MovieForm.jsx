import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const MovieForm = () => {
  const { id } = useParams(); // Get the director's id from the URL
  const navigate = useNavigate(); // Used for redirection
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [genres, setGenres] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: uuidv4(),
      title,
      time: parseInt(time),
      genres: genres.split(',').map((genre) => genre.trim()),
    };

    fetch(`http://localhost:4000/directors/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ movies: [newMovie] }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add movie');
        }
        return response.json();
      })
      .then((data) => {
        // Redirect to the newly added movie page
        navigate(`/directors/${id}/movies/${newMovie.id}`);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genres (comma-separated)"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;
