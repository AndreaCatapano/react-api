import axios from 'axios'
import { useEffect, useState } from 'react'


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
          <li key={actress.id}>{actress.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
