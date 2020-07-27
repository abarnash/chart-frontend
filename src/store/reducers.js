const axios = require('axios')
import C from '../constants'
import regeneratorRuntime from "regenerator-runtime";

export const color = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                numRooms: action.numRooms,
                timestamp: action.timestamp,
                rating: 0
            }
        case C.RATE_COLOR:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    rating: action.rating
                }
        default :
            return state
    }
}

export const colors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_COLOR :
            return [
                ...state,
                color({}, action)
            ]
        case C.RATE_COLOR :
            return state.map(
                c => color(c, action)
            )
        case C.REMOVE_COLOR :
            return state.filter(
                c => c.id !== action.id
            )
        default:
            return state
    }
}

export const sort = (state = "SORTED_BY_DATE", action) => {
    switch (action.type) {
        case "SORT_COLORS":
            return action.sortBy
        default :
            return state
    }
}

const postScenario = async (scenario) => {
  console.log("Running...", scenario.numRooms)
  const response = axios.post('http://localhost:5002/building',
    {numRooms:parseInt(scenario.numRooms),
     avgLos:parseInt(scenario.avgLos)})
  return response.data
}

export const scenario = (state = {}, action) => {
    console.log("run s")
    switch (action.type) {
        case C.ADD_SCENARIO:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                numRooms: action.numRooms,
                initialAvail: action.initialAvail,
                avgLos: action.avgLos
            }
        case C.RUN_SCENARIO:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    data: postScenario(state)
                }
        default :
            return state
    }
}

export const scenarios = (state = [], action) => {
    switch (action.type) {
        case C.ADD_SCENARIO :
            return [
                ...state,
                scenario({}, action)
            ]
        case C.RUN_SCENARIO :
            return state.map(
                s => scenario(s, action)
            )
        case C.REMOVE_SCENARIO :
            return state.filter(
                s => s.id !== action.id
            )
        case C.RUN_RESULTS:
          return {
            ...state,
            results: action.data
          }
        default:
            return state
    }
}
