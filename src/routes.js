import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  CreateFlowchartContainer
} from './containers'


class Routes extends Component {
  componentDidMount() {
    //
  }

  render() {

    return (
      <Switch>
        <Route exact path="/" component={CreateFlowchartContainer} />
      </Switch>
    )
  }
}

export default Routes
