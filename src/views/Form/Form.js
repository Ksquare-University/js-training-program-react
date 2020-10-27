import React from "react";
import "./Form.css";

export class Form extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChangeInput = (prop) => (event) => {
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.username} - ${this.state.password}`);
  };

  render() {
    return (
      <main className="main">
        <div className="login__card">
          <h1 className="header">Super Duper Login</h1>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="fields__container">
              <div className="field">
                <label>Username</label>
                <input
                  name="js-convention-username"
                  value={this.state.username}
                  onChange={this.handleChangeInput("username")}
                />
              </div>

              <div>
                <label>Password</label>
                <input
                  name="js-convention-password"
                  value={this.state.password}
                  onChange={this.handleChangeInput("password")}
                />
              </div>
            </div>

            <div className="button__container">
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}


//Step 7. A list function
<List items = {[1,2,3]}>
  
</List>
function List(props){
  return <div>
    {props.items.map((item) => <p>{item}</p>)}
  </div>
}