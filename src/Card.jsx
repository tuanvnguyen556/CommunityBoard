import './Card.css'

const Card = ({props}) => {
    return (<>
    <div>
        <div>
            <img src={props.img}/>
        </div>
        <div>
            <span>
                {props.name}
            </span>
            <span>
                {props.type}
            </span>
        </div>
    </div>
        
    </>)
}

export default Card