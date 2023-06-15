import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './data/data.jsx'
import NoLogs from './components/NoLogs'

function App() {
  const [travelLogs, setTravelLogs] = useState([])
  const [logFormOpen, setLogFormOpen] = useState(false)

  useEffect(() => {
    setTravelLogs(data)
  }, [])

  const cardElements = travelLogs.map(item => {
    return (
      <Card 
        {...item}
      />
    )
  })

  function openLogForm() {
    console.log('clicked')
  }

  return (
      
      <>
      {travelLogs < 1 ? <NoLogs handleClick={openLogForm}/> : 
        <>
          <Header handleClick={openLogForm}/>
          <main className='main-container'>
            {cardElements}
          </main>
        </>
      }
      </>
      
      
    
  )
}

export default App
