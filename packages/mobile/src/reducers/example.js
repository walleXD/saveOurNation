import { increment, decrement } from 'lib/types'

const INITIAL_STATE = {
  score: 0
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case increment:
      return { ...state, score: state.score + payload }
    case decrement:
      return { ...state, score: state.score - payload }
    default:
      return state
  }
}
