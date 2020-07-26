import C from './constants'
import {
  v4
} from 'uuid'

export const removeScenario = id =>
  ({
    type: C.REMOVE_SCENARIO,
    id
  })

export const runScenario = (id, params) =>
  ({
    type: C.RUN_SCENARIO,
    ...params
  })

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
