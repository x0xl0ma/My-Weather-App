import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  state = {
    value: "",
  };

  inputHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (this.state.value.trim().length < 2) {
      return;
    }

    const { fetchCity } = this.props;

    fetchCity(this.state.value);
  };

  render() {
    const { value } = this.state;

    return (
      <div className="col-md-10 offset-md-1">
        <form onSubmit={(e) => this.submitHandler(e)}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Type your City"
              value={value}
              onChange={(e) => this.inputHandler(e)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Enter
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.city,
  };
}

export default connect(mapStateToProps, null)(Input);
