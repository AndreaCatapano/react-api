import axios from 'axios'
import { useEffect, useState } from 'react'


import ActorCard from './components/ActorCard.jsx'


const url = "https://www.freetestapi.com/api/v1/actresses"


function App() {

  const [actresses, setActresses] = useState([])

  function getActress() {
    const response = axios.get(url).then((res) => setActresses(res.data))
      .catch((err => console.log(err)))
  }

  useEffect(() => getActress(), []);

  return (
    <>
      <ul>
        {actresses.map(actress => (
          <ActorCard key={actress.id} actor={actress} />
        ))}
      </ul>
    </>
  )
}

export default App
