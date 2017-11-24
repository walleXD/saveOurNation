import { incrementAsync, decrementAsync } from '../lib/types'
import { increment, decrement } from '../actions/example'

export default [
  action$ =>
    action$
      .ofType(incrementAsync)
      .delay(1000)
      .map(({ payload }) => increment(payload)),
  action$ =>
    action$
      .ofType(decrementAsync)
      .delay(1000)
      .map(({ payload }) => decrement(payload))
]
