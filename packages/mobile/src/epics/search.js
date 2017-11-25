import { findRepresentatives } from "lib/types"
import { Observable } from "rxjs/Observable"

import { setCongressman, setSenators } from "actions/search"
import api from "api"

export default [
  (action$, store) =>
    action$
      .ofType(findRepresentatives)
      .flatMap(() => {
        const { search: { address } } = store.getState()
        console.log(address)
        const addressInput = `
          ${address.Street}
          ${address.City}
          ${address.State}
          ${address.Zipcode}
        `
        return api(addressInput).json()
      })
      .flatMap(response => {
        const { offices, officials } = response
        const senators = offices[0].officialIndices.map(
          index => officials[index]
        )
        const congressman = offices[1].officialIndices.map(
          index => officials[index]
        )
        return [setSenators(senators), setCongressman(congressman)]
      })
]
