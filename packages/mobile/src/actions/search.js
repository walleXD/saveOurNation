import {
  setAddress as setAddressType,
  findRepresentatives as findRepresentativesType,
  setCongressman as setCongressmanType,
  setSenators as setSenatorsType,
  toggleLoadingStatus as toggleLoadingStatusType,
  setLoadingStatus as setLoadingStatusType,
  setError as setErrorType,
  clearError as clearErrorType
} from "lib/types"

export const setAddress = payload => ({
  type: setAddressType,
  payload
})

export const findRepresentatives = () => ({
  type: findRepresentativesType
})

export const setCongressman = payload => ({
  type: setCongressmanType,
  payload
})

export const setSenators = payload => ({
  type: setSenatorsType,
  payload
})

export const setLoadingStatus = payload => ({
  type: setLoadingStatusType,
  payload
})

export const toggleLoadingStatus = () => ({
  type: toggleLoadingStatusType
})

export const setError = payload => ({
  type: setErrorType,
  payload
})

export const clearError = () => ({
  type: clearErrorType
})
