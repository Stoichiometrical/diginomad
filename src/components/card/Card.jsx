import "./card.scss"
import {Link} from "react-router-dom";

export default function Card(props){
    return(
        <>
            <div className="card-container">
                <Link to={props.link}><img src={props.image} alt="Photo Missing" className="img"/></Link>
                    <div className='text-cont'>
                        <h2 className="text">{props.name}</h2>
                    </div>
            </div>
        </>
    )
}