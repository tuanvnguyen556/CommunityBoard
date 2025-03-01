import './Card.css'

const Card = (props) => {
    return (<>
    <div className="single-card-container">
        <div className="image-container">
            <img src={props.image}/>
        </div>
        <div className="content">
            <span className="name">
                {props.name}
            </span>
            <span className="date">
                {props.date}
            </span>
            <span className="time">
                {props.time}
            </span>
            <button className="menu">View Match</button>
        </div>
    </div>
        
    </>)
}

export default Card