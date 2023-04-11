// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncrement = () => {
    const {mango} = this.state

    this.setState(prevState => {
      console.log(`previousState value is ${prevState.mango}`)
      return {
        mango: prevState.mango + 1,
      }
    })
  }

  onDecrement = () => {
    const {banana} = this.state

    this.setState(prevState => {
      console.log(`previousState value is ${prevState.banana}`)
      return {
        banana: prevState.banana + 1,
      }
    })
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="fruit-count">{mango}</span> mangoes{' '}
            <span className="fruit-count">{banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="fruit-logo"
              />
              <br />

              <button
                type="button"
                className="fruitbtn"
                onClick={this.onIncrement}
              >
                Eat Mango
              </button>
            </div>

            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="fruit-logo"
              />
              <br />

              <button
                type="button"
                className="fruitbtn"
                onClick={this.onDecrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
