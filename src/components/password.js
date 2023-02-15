import React, { Component } from "react"
import "./project.css"

class password extends Component {
  render() {
    return (
      <div className="password">
         <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
      </div>
    )
  }
}

export default password
