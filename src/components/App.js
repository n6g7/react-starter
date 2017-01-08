import React from 'react';
import { connect } from 'react-redux';

import './App.styl';

class App extends React.PureComponent {
  render() {
    return <div>
      <p>React starter</p>
    </div>;
  }
}

App.propTypes = {};

export default App;

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
