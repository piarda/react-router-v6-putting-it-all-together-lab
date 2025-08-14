import { useOutletContext } from 'react-router-dom';

const DirectorList = () => {
  // Access directors from context passed by DirectorContainer
  const { directors } = useOutletContext();

  if (directors.length === 0) {
    return <h2>No directors available</h2>;
  }

  const displayDirectors = directors.map((director) => (
    <li key={director.id}>
      <a href={`/directors/${director.id}`}>{director.name}</a>
    </li>
  ));

  return (
    <div>
      <h2>Directors</h2>
      <ul>
        {displayDirectors}
      </ul>
      <a href="/directors/new">Add New Director</a>
    </div>
  );
};

export default DirectorList
