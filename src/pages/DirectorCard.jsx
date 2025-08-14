import { useParams, Link, Outlet, useOutletContext } from "react-router-dom";

const DirectorCard = () => {
  const { id } = useParams();
  // Get the directors context from the parent DirectorContainer
  const { directors } = useOutletContext(); 

  const director = directors.find(d => d.id === id);

  if (!director) {
    return <h2>Director not found</h2>;
  }

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>
      <h3>Movies:</h3>
      <ul>
        {director.movies && director.movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/directors/${director.id}/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={`/directors/${director.id}/movies/new`}>Add New Movie</Link>
      
      {/* This is the key change! Pass the context from here. */}
      <Outlet context={{ directors, director }}/> 
    </div>
  );
};

export default DirectorCard
