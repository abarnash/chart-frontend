const axios = require('axios')
import C from '../constants'
import regeneratorRuntime from "regenerator-runtime";

export const sort = (state = "SORTED_BY_DATE", action) => {
    switch (action.type) {
        case "SORT_COLORS":
            return action.sortBy
        default :
            return state
    }
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
        // case C.RUN_SCENARIO:
        //     return (state.id !== action.id) ?
        //         state :
        //         {
        //             ...state,
        //             data: postScenario(state)
        //         }
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
        // case C.RUN_SCENARIO :
        //     return state.map(
        //         s => scenario(s, action)
        //     )
        case C.REMOVE_SCENARIO :
            return state.filter(
                s => s.id !== action.id
            )
        default:
            return state
    }
}

export const charts = (state = {}, action) => {
  console.log("ACTION",state, action)
  switch (action.type){
    case C.RUN_RESULTS :
        return {
          ...state,
          data: action.data
        }
    default:
        return state
  }
}
