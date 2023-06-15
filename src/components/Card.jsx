

export default function Card(props) {
    
    return (
        <div className="card">
            <img src={props.imageUrl} className="card--image"/>
            <div className="card--content">
                <p className="card--location_info">
                    <span className="card--location_pin">📍</span>
                    {props.location}
                    <span className="card--maps_link">
                        <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </span>
                </p>
                <h2 className="card--title">{props.title}</h2>
                <p className="card--dates">{props.startDate} - {props.endDate}</p>
                <p className="card--desc">{props.description}</p>
            </div>
        </div>
    )
}
