import { useState } from "react";


export default function TravelLogForm(props) {
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        googleMapsUrl: "",
        startDate: "",
        endDate: "",
        description: "",
        imageUrl: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => (
            {
                ...prevFormData,
                [name]: value
            }
        ))
    }

    return (
        <div className="travel_log_form--container">
            <button className="travel_log_form--close" onClick={props.handleClose}>X</button>
            <form className="travel_log_form">
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
                <input type="text" name="location" value={formData.location} onChange={handleChange} />
                <input type="text" name="googleMapsUrl" value={formData.title} onChange={handleChange} />
                <input type="text" name="startDate" value={formData.title} onChange={handleChange} />
                <input type="text" name="endDate" value={formData.title} onChange={handleChange} />
                <input type="text" name="description" value={formData.title} onChange={handleChange} />
                <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
                <button onClick={() => {console.log('clicked')}}>Add to Travel Journal</button>
            </form>
        </div>
    )
}