import { useState, useEffect } from "react";


export default function TravelLogForm({ formData, handleClose, handleChange, handleSubmit }) {

    const [selectedImage, setSelectedImage] = useState(null)
    const [selectedImageURL, setSelectedImageURL] = useState(null)
    console.log(selectedImageURL)

    useEffect(() => {
        if(selectedImage) {
            setSelectedImageURL(URL.createObjectURL(selectedImage))
        }
    }, [selectedImage])

    // const [formData, setFormData] = useState({
    //     title: "",
    //     location: "",
    //     googleMapsUrl: "",
    //     startDate: "",
    //     endDate: "",
    //     description: "",
    //     imageUrl: ""
    // })

    function handleImageChange(event) {
        const {name, value, type, files} = event.target
        setSelectedImage(files[0])
    }

    return (
        <div className="form_comp--container">
            <div className="form_comp--inner">
                <button className="form_comp--close btn btn_light" onClick={handleClose}>Cancel</button>
                <form className="form_comp--form">
                    <input placeholder="Title" type="text" name="title" value={formData.title} onChange={handleChange} />
                    <input placeholder="Location" type="text" name="location" value={formData.location} onChange={handleChange} />
                    <input placeholder="MAPS NEED TO FIGURE OUT" type="text" name="googleMapsUrl" value={formData.googleMapsUrl} onChange={handleChange} />
                    <div>
                        <label htmlFor="startDate">Start Date: </label>
                        <input type="date" name="startDate" id="startDate" value={formData.startDate} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="endDate">End Date: </label>
                        <input type="date" name="endDate" id="endDate" value={formData.endDate} onChange={handleChange} />
                    </div>
                    <textarea placeholder="Description" type="text" name="description" maxLength="250" value={formData.description} onChange={handleChange} />
                    <input type="file" name="imageUrl" onChange={handleImageChange} />
                    <button className="btn btn_light" onClick={() => handleSubmit(selectedImageURL)} >Add to Travel Journal</button>
                </form>
            </div>
            {selectedImageURL && <img src={selectedImageURL} /> }
        </div>
    )
}