import {CHANGE_INTERVAL} from './actions'

export const reducer = (state, action) => {
    switch(action.type) {
      case CHANGE_INTERVAL:
        return state += action.payload
      default:
        return {}
    }
  }