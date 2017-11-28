import rxFetch from "rxjs-fetch"
import { API_KEY } from "react-native-dotenv"

export default (address = "285 Fulton St, New York, NY 10007") =>
  rxFetch(
    `https://www.googleapis.com/civicinfo/v2/representatives?key=${
      API_KEY
    }&address=${
      address
    }&roles=legislatorUpperBody&roles=legislatorLowerBody&levels=country`
  )
// .json()
// .subscribe(
//   response => {
//     console.log("response", response)
//   },
//   error => {
//     console.error(error)
//   }
// )
