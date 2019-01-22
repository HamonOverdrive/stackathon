import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import frames from './frames'
import diagram from './diagram'


const reducer = combineReducers({frames, diagram})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, logger)
)
const store = createStore(reducer, middleware)

export default store
export * from './frames'
export * from './diagram'
