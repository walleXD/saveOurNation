import {
  setAddress,
  setCongressman,
  setSenators,
  setLoadingStatus,
  toggleLoadingStatus,
  setError,
  clearError
} from "lib/types"

const INIT_STATE = {
  address: {
    Street: "",
    City: "",
    State: "",
    Zipcode: 0
  },
  senators: [{}, {}],
  congressman: [{}],
  loading: false,
  error: null
}

export default (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case setAddress:
      return { ...state, address: payload }
    case setCongressman:
      return { ...state, congressman: payload }
    case setSenators:
      return { ...state, senators: payload }
    case setLoadingStatus:
      return { ...state, loading: payload }
    case toggleLoadingStatus:
      return { ...state, loading: !state.loading }
    case setError:
      return { ...state, error: payload }
    case clearError:
      return { ...state, error: null }
    default:
      return state
  }
}
