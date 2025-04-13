import axios from 'axios'
import { useEffect, useState } from 'react'
import ActorCard from './components/ActorCard.jsx'

const womanUrl = "https://www.freetestapi.com/api/v1/actresses"
const manUrl = "https://www.freetestapi.com/api/v1/actors"

function App() {
  const [actors, setActors] = useState([])
  const [actresses, setActresses] = useState([])
  const [activeTab, setActiveTab] = useState("actresses")
  const [displayData, setDisplayData] = useState([])

  function fetchActors() {
    axios.get(manUrl)
      .then(res => {
        const actorsWithUniqueIds = res.data.map(actor => ({
          ...actor,
          originalId: actor.id,
          id: `actor-${actor.id}`
        }));
        setActors(actorsWithUniqueIds);
      })
      .catch(err => console.log(err))
  }

  function fetchActresses() {
    axios.get(womanUrl)
      .then(res => {
        const actressesWithUniqueIds = res.data.map(actress => ({
          ...actress,
          originalId: actress.id,
          id: `actress-${actress.id}`
        }));
        setActresses(actressesWithUniqueIds);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchActors()
    fetchActresses()
  }, [])

  useEffect(() => {
    if (activeTab === "actresses") {
      setDisplayData(actresses)
    } else if (activeTab === "actors") {
      setDisplayData(actors)
    } else if (activeTab === "both") {
      setDisplayData([...actors, ...actresses])
    }
  }, [activeTab, actors, actresses])

  const showActresses = () => {
    setActiveTab("actresses")
  }

  const showActors = () => {
    setActiveTab("actors")
  }

  const showBoth = () => {
    setActiveTab("both")
  }

  return (
    <>
      <div className="toggle-container">
        <button
          className={`toggle-button ${activeTab === "actresses" ? "active" : ""}`}
          onClick={showActresses}> Actresses</button>
        <button
          className={`toggle-button ${activeTab === "both" ? "active" : ""}`}
          onClick={showBoth}> Both</button>
        <button
          className={`toggle-button ${activeTab === "actors" ? "active" : ""}`}
          onClick={showActors}> Actors </button>
      </div>

      <div className="cards-container">
        {(displayData || []).map(person => (
          <ActorCard key={person.id} actor={person} />
        ))}
      </div>
    </>
  )
}

export default App