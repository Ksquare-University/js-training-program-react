import React from "react";
import { CounterView } from "./CounterView";

/**
 * The first final boss is here!!
 *
 * THE COUNTER
 *
 * Objective:
 *  Implement all the required logic to make the counter works!!
 *
 * Considerations:
 *  Buttons:
 *    1. SET
 *      - disabled if any of the inputs (STEP and GOAL) has an invalid value
 *      - on click disable both inputs
 *      - on click set the goal and step values as the finals ones and ready
 *        to use them by the counter
 *      - on click make the step buttons available (not disable)
 *    2. RESET
 *      - disabled by default
 *      - available once the values being setted (once SET button has been clicked)
 *      - on click set the value of STEP to 1 and GOAL to 10
 *      - on click disable the step buttons
 *    3. STEP Buttons
 *      - disabled by default
 *      - available once values have been setted
 *      - SUBSTRACT Button subtracts the step value to the counter, if the value of the step is greater
 *        than the counter value set the counter to 0.
 *      - ADD Button add the step value to the counter
 *  Inputs:
 *    - can't be empty
 *    - only accepts number (optional)
 *    - available by default
 *    - disabled once SET button has been clicked
 *  Message
 *    - only visible if the value of the counter is greater than or equal to GOAL value
 *
 *  Once the goal has been reached the step buttons should be disabled
 *
 * This exercise test:
 *  - props
 *  - state
 *  - events
 *  - forms
 *  - lifting state up
 *
 * As you can see this component is using a Container - Presentation pattern so the presentation
 * component should receive all the props and functionality!!
 *
 * Take your time, just remember do a pr!
 */

export class Counter extends React.Component {
  // TODO: Implement me!
  state = {};

  render() {
    return <CounterView />;
  }
}
