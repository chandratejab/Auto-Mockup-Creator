import { combineReducers } from 'redux';

import { TEST } from '../actions/types';

const INITIAL_STATE = {
  count: 0
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEST:
      return { count: state.count + 1 }
    default:
      return state
  }
}

export default combineReducers({
  global: reducer
})
