import { CHANGE_BASE } from './settingsActions'

export function settings(state = "http://localhost:3000/api/year/2011", action) {
  switch (action.type) {
    case CHANGE_BASE:
      return action.text
    default:
      return state
  }
}