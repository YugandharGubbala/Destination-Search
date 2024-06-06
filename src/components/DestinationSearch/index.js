// Write your code here
import './index.css'
import DestinationItem from '../DestinationItem'
import {Component} from 'react'

class DestinationSearch extends Component {
  state = {
    serachInput: '',
  }
  onChange = event => {
    this.setState({serachInput: event.target.value})
  }
  render() {
    const {serachInput} = this.state
    const {destinationsList} = this.props
    const result = destinationsList.filter(each =>
      each.name.toLowerCase().includes(serachInput.toLowerCase()),
    )

    return (
      <div>
        <div className="container2">
          <h1 className="heading">Destination Search</h1>
          <div className="imgandsearch">
            <input className="inputbox" type="Search" placeholder="Search"  onChange={this.onChange}/>
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="searchimg"
            />
          </div>
          <ul className="line">
            {result.map(each => (
              <DestinationItem key={each.id} details={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
