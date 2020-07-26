import { connect } from 'react-redux'
import Chart from './ui/Chart'
import AddScenarioForm from './ui/AddScenarioForm'
import ScenarioList from './ui/ScenarioList'
import { addScenario, removeScenario, runScenario } from '../actions-v2'
import { sortFunction } from '../lib/array-helpers'

export const NewScenario = connect(
    null,
    dispatch =>
        ({
            onNewScenario(title, color, numRooms, initialAvail, avgLos, onRemove, onRun) {
                dispatch(addScenario(title, color, numRooms, initialAvail, avgLos, onRemove, onRun))
            }
        })
)(AddScenarioForm)

export const Charts = connect(
    state =>
        ({
            data: state.scenarios
        }),
    null
)(Chart)

export const Scenarios = connect(
    state =>
        ({
            scenarios: [...state.scenarios]
        }),
    dispatch =>
        ({
            onRun(id, rating) {
                dispatch(runScenario(id, {}))
            },
            onRemove(id) {
                dispatch(removeScenario(id))
            }
        })
)(ScenarioList)

// export const Menu = connect(
//     state =>
//         ({
//             sort: state.sort
//         }),
//     dispatch =>
//         ({
//             onSelect(sortBy) {
//                 dispatch(sortColors(sortBy))
//             }
//         })
// )(SortMenu)
//
// export const Charts = connect(
//     state =>
//         ({
//             data: state.colors
//         }),
//     null
// )(Chart)
//
// export const Colors = connect(
//     state =>
//         ({
//             colors: [...state.colors].sort(sortFunction(state.sort))
//         }),
//     dispatch =>
//         ({
//             onRemove(id) {
//                 dispatch(removeColor(id))
//             },
//             onRate(id, rating) {
//                 dispatch(rateColor(id, rating))
//             }
//         })
// )(ColorList)
