import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import Input from "../components/Input";
import { Loader } from "../components/Loader";
import { Card } from "../components/Card";
import { fetchCity } from "../store/actions";
import { ErrorIndicator } from "../components/ErrorIndicator";

class MainPage extends Component {
  render() {
    const { fetchCity, loading, city, error } = this.props;

    return (
      <Fragment>
        <Input fetchCity={fetchCity} />

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorIndicator />
        ) : city ? (
          <Card city={city} />
        ) : null}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    city: state.city,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCity: (city) => dispatch(fetchCity(city)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
