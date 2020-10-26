import React from "react";
import "./Form.css";

export class Form extends React.Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    return (
      <main className="main">
        <div className="login__card">
          <h1 className="header">Super Duper Login</h1>
          <form className="form">
            <div className="fields__container">
              <div className="field">
                <label>Username</label>
                <input />
              </div>

              <div>
                <label>Password</label>
                <input />
              </div>
            </div>

            <div className="button__container">
              <button className="button">Submit</button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}
