function Loader(props){
    
    let display = props.isActive ? "block" : "none"
    return(
        <span className="loader" style={{display:display}}></span>
    )
}

export default Loader