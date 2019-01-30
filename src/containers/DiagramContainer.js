
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Diagram} from '../components';

// Map the global application state to the props
function mapStateToProps(state) {
  console.log(state, 'hello')
  return {
    listDiagram: state.diagram
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Diagram);
