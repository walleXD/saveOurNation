import { setAddress, setCongressman, setSenators } from "lib/types"

const INIT_STATE = {
  address: {
    Street: "",
    City: "",
    State: "",
    Zipcode: 0
  },
  senators: [{}, {}],
  congressman: [{}]
}

export default (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case setAddress:
      return { ...state, address: payload }
    case setCongressman:
      return { ...state, congressman: payload }
    case setSenators:
      return { ...state, senators: payload }
    default:
      return state
  }
}
