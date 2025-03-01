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
            <span className="type">
                {props.date}
            </span>
            <span className="type">
                {props.time}
            </span>
            <button className="menu">View Menu</button>
        </div>
    </div>
        
    </>)
}

export default Card