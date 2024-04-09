function CardFeature(props){
    return(
    <div className="card">
        <img src={props.src} alt={props.alt} className="feature-icon"/>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </div>)
}

export default CardFeature;