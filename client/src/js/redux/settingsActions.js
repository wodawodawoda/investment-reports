export const CHANGE_BASE = 'CHANGE_BASE'

export function changeBase (text = 'http://localhost:3000/api/year/2011') {
  return {
    type: CHANGE_BASE,
    text
  }
}