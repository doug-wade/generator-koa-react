import React from 'react';
import { connect } from 'react-redux';
import { getExcited } from '../actions';

const mapStateToProps = (state) => {
  return {
    excitement: state.excitement
  };
};

let HelloWorld = ({ excitement, dispatch }) => {
  return (
    <div>
      <h2>Hello, World{'!'.repeat(excitement)}</h2>
      <button onClick={ () => dispatch(getExcited()) }>Get More Excited!</button>
    </div>
  );
};

HelloWorld.propTypes = {
  excitement: React.PropTypes.number.isRequired,
  dispatch: React.PropTypes.func.isRequired
};

HelloWorld = connect(mapStateToProps)(HelloWorld);

export default HelloWorld;
