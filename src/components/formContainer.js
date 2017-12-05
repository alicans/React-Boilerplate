import React, { Component } from "react";

class FormContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // you should start your dispatcher with currentInput as data... (hint)

    return (
      <form className="form-container" onSubmit={e => e.preventDefault()}>
      <div>
        <input
          className="input-field"
          placeholder={"Task Description"}
          value={this.props.currentInput}
          onChange={e => {
            this.props.dispatch({
              type: "ADD_CURRENT_INPUT",
              data: e.target.value
            })
          }}
        />
      </div>
        <div>
          <button
            className="add-task-btn"
            onClick={() => {
              // You will trigger your reducer with an action to add todo task here...
            }}
          >
            {"Add Task"}
          </button>
        </div>
      </form>
    );
  }
}

export default FormContainer;
