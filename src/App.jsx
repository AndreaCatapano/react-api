import axios from 'axios'
import { useEffect, useState } from 'react'


import ActorCard from './components/ActorCard.jsx'




function App() {

  const [actors, setActresses] = useState([])

  const [url, setUrl] = useState("https://www.freetestapi.com/api/v1/actresses")

  function getActress() {
    const response = axios.get(url).then((res) => setActresses(res.data))
      .catch((err => console.log(err)))
  }

  useEffect(() => getActress(), []);

  return (
    <>
      <div className="cards-container">
        {actors.map(actor => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </>
  )
}

export default App
