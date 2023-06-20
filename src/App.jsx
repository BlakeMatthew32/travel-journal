import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './data/data.jsx'
import NoLogs from './components/NoLogs'
import TravelLogForm from './components/TravelLogForm'

function App() {

  const [travelLogs, setTravelLogs] = useState([])
  const [logFormOpen, setLogFormOpen] = useState(false)

  const [formData, setFormData] = useState({
      title: "",
      location: "",
      googleMapsUrl: "",
      startDate: "",
      endDate: "",
      description: "",
      imageUrl: ""
  })

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
    setLogFormOpen(true)
  }

  function handleFormClose() {
    setLogFormOpen(false)
  }

  function handleFormChange(event) {
    const {name, value, type, files} = event.target
    let propertyValue
    if (type === "file") {
      propertyValue = files
    }

    console.log(event.target)

    setFormData(prevFormData => (
        {
            ...prevFormData,
            [name]: value
        }
    ))
  }

  function handleFormSubmit(event, imageUrlData) {
    event.preventDefault()

    
    console.log("clicked")
    setTravelLogs(prevLogs => {
      prevLogs.unshift(
        {
          ...formData,
          imageUrl: selectedImageUrl
        }
      )
      return prevLogs
    })
  }

  return (
      
      <>
      {travelLogs < 1 ? <NoLogs handleClick={openLogForm}/> : 
        <>
          <Header handleClick={openLogForm}/>
          {logFormOpen && <TravelLogForm formData={formData} handleClose={handleFormClose} handleChange={handleFormChange}  handleSubmit={handleFormSubmit} />}
          <main className='main-container'>
            { cardElements}
          </main>
        </>
      }
      </>
      
      
    
  )
}

export default App
