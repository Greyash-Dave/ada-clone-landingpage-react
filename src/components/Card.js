const Card = ({icon, title, description}) => {
    return (
      <div className="card">
        <div>
        <div id="img"><img src={icon}></img></div>
        </div>
        <div>
        <div id="h1"><h1>{title}</h1></div>
        <div id="h3"><h3>{description}</h3></div>
        </div>
      </div>
    )
  }
  
  export default Card