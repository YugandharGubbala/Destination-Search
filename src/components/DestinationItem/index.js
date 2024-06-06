// Write your code here
import "./index.css"
const DestinationItem = props => {
    const {details} = props
    const {imgUrl ,name}=details

    return (
        <li className="item">
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
        </li>
    )
}
export default DestinationItem