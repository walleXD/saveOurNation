import {
  increment as incrementType,
  decrement as decrementType,
  incrementAsync as incrementAsyncType,
  decrementAsync as decrementAsyncType
} from 'lib/types'

export const increment = payload => ({
  type: incrementType,
  payload
})

export const decrement = payload => ({
  type: decrementType,
  payload
})

export const incrementAsync = payload => ({
  type: incrementAsyncType,
  payload
})

export const decrementAsync = payload => ({
  type: decrementAsyncType,
  payload
})
