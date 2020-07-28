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
            data: [...state.charts.data]
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
            onRun(id, params) {
                dispatch(runScenario(id, params))
            },
            onRemove(id) {
                dispatch(removeScenario(id))
            }
        })
)(ScenarioList)
