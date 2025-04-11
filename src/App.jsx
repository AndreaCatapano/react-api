import axios from 'axios'
import { useEffect, useState } from 'react'
import ActorCard from './components/ActorCard.jsx'

function App() {
  const [actors, setActors] = useState([])
  const [url, setUrl] = useState("https://www.freetestapi.com/api/v1/actresses")
  const [activeTab, setActiveTab] = useState("actresses")

  function fetchActor() {
    axios.get(url).then((res) => setActors(res.data))
      .catch((err => console.log(err)))
  }

  useEffect(() => fetchActor(), [url]);

  const showActresses = () => {
    setUrl("https://www.freetestapi.com/api/v1/actresses")
    setActiveTab("actresses")
  }

  const showActors = () => {
    setUrl("https://www.freetestapi.com/api/v1/actors")
    setActiveTab("actors")
  }

  return (
    <>
      <div className="toggle-container">
        <button
          className={`toggle-button ${activeTab === "actresses" ? "active" : ""}`}
          onClick={showActresses}>  Actresses  </button>
        <button
          className={`toggle-button ${activeTab === "actors" ? "active" : ""}`}
          onClick={showActors}> Actors </button>
      </div>

      <div className="cards-container">
        {actors.map(actor => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </>
  )
}

export default App