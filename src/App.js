import React, { Component } from "react"
import { connect } from "react-redux"
import user from "./images/user.png"
import "./App.css"
import { setProfession } from "./actions"

class App extends Component {
  handleProfessionUpdate = () => {
    const professions = [
      "Dancer",
      "Fashion Designer",
      "Bartender",
      "Wrestler",
      "Librarian",
      "Singer",
      "Coder",
      "Teacher"
    ]

    const randomProfession = professions[Math.floor(Math.random() * professions.length)]
    this.props.setProfession(randomProfession)
  }

  render() {
    console.log('RENDER APP')
    const { name, likes, location, description } = this.props
    return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>

        <div className="App__update">
          <button onClick={this.handleProfessionUpdate}>
            Change user's profession
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ name, location, likes, description }) => ({ name, location, likes, description })
export default connect(mapStateToProps, { setProfession })(App)