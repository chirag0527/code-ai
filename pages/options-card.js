export default function Option(props){
    return(
            <div className='option-box'>
                <div className='option-image'>
                <img src={props.image}></img>
                </div>
                <div className='option-title'>
                <h3>{props.title}</h3>
                </div>
                <div className='option-description'>
                <p>{props.description}</p>
                <a href={props.link} className='link-to-page'>Head in here {`> >`}</a>  
                </div>
            
    </div>
    )}