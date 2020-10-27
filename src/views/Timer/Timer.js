import React from "react";
import "./Timer.css";

// Let's add state to Timer component!!

class TimerTiny extends React.Component {
  state = { date: new Date().toLocaleTimeString };

  componentDidMount() {
    const time = this.props.time && 1000;
    this.timerID = setInterval(() => this.tick(), time);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({ date: new Date().toLocaleTimeString() });
  };

  render() {
    return (
      <div className="card">
        <h1>I'm a Timer!!</h1>
        <div className="card__timer">
          <p>{this.state.date}</p>
        </div>
      </div>
    );
  }
}

export function Timer() {
  return (
    <main className="main">
      <div style={{ marginRight: "8px" }}>
        <TimerTiny time={5000} />
      </div>
      <div>
        <TimerTiny />
      </div>
    </main>
  );
}
