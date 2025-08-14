import { useState } from "react"
import { useNavigate } from "react-router-dom"

function DirectorForm({ setDirectors }) {
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const newDirector = { name, bio, movies: [] };

    fetch("http://localhost:4000/directors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDirector)
    })
    .then((response) => {
        if (!response.ok) { throw new Error("Failed to add director") }
        return response.json()
    })
    .then((data) => {
        // Redirect to the newly created director's page
        navigate(`/directors/${data.id}`);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Add New Director</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Director's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Director's Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        <button type="submit">Add Director</button>
      </form>
    </div>
  );
}

export default DirectorForm
