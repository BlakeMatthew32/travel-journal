import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './data/data.jsx'

function App() {
  const [count, setCount] = useState(0)

  const cardElements = data.map(item => {
    return (
      <Card 
        {...item}
      />
    )
  })

  return (
    <>
      <Header />
      <main className='main-container'>
        {cardElements}
      </main>
      
    </>
  )
}

export default App
