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
    state => ({...state.charts}),
    null
)(Chart)

export const Scenarios = connect(
    state =>
        ({
            scenarios: [...state.scenarios]
        }),
    dispatch =>
        ({
            onRun(title, params) {
                dispatch(runScenario(title, params))
            },
            onRemove(id) {
                dispatch(removeScenario(id))
            }
        })
)(ScenarioList)
