import C from './constants'
import {
  v4
} from 'uuid'
const axios = require('axios')
import regeneratorRuntime from "regenerator-runtime";

export const removeScenario = id =>
  ({
    type: C.REMOVE_SCENARIO,
    id
  })

// export const runScenario = (id, params) =>
//   ({
//     type: C.RUN_SCENARIO,
//     id,
//     ...params
//   })

export const runResults =
  (id, data) =>
  ({
    type: C.RUN_RESULTS,
    id,
    data
  })

export const runScenario = (id, params) => {
  return (dispatch) => {
    console.log('HERE', id, params)
    return axios.post('http://localhost:5002/building', {
        numRooms: parseInt(params.numRooms),
        avgLos: parseInt(params.avgLos)
      })
      .then(({
        data
      }) => {
        dispatch(runResults(id, data));
      })
  }
}

export const addScenario =
  (title, color, numRooms, initialAvail, avgLos, onRemove, onRun) =>
  ({
    type: C.ADD_SCENARIO,
    id: v4(),
    title,
    color,
    numRooms,
    initialAvail,
    avgLos
  })
