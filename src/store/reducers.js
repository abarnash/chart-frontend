import C from '../constants'

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

export const scenario = (state = {}, action) => {
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
                    ...state
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
        default:
            return state
    }
}
