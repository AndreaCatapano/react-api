import axios from 'axios'
import { useState } from 'react'


const url = "https://www.freetestapi.com/api/v1/actresses"

function App() {

  const actress = axios.get(url).then((res) => { res.data }).catch((err => console.log(err)))

  console.log(actress)

  return (
    <>

    </>
  )
}

export default App
