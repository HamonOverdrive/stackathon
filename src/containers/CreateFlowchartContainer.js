


import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateFlowchart from '../components/CreateFlowchart';
import {addNode} from '../store/diagram'


// Map the global application state to the props
function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    //
    addNode(i){
      dispatch(addNode(i))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateFlowchart);
