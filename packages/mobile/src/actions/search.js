import {
  setAddress as setAddressType,
  findRepresentatives as findRepresentativesType,
  setCongressman as setCongressmanType,
  setSenators as setSenatorsType
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
