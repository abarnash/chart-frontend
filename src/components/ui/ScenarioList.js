import PropTypes from 'prop-types'
import Scenario from './Scenario'
import '../../../stylesheets/ScenarioList.scss'

const ScenarioList = ({ scenarios=[], onRun=f=>f, onRemove=f=>f }) =>
    <div className="scenario-list">
        {(scenarios.length === 0) ?
            <p>No Scenarios Listed. (Add a Scenario)</p> :
            scenarios.map(scenario =>
                <Scenario key={scenario.id}
                    {...scenario}
                       onRun={(params) => onRun(scenario.title, params)}
                       onRemove={() => onRemove(scenario.id)} />
            )
        }
    </div>

ScenarioList.propTypes = {
    scenarios: PropTypes.array,
    onRemove: PropTypes.func,
    onRun: PropTypes.func
}

export default ScenarioList
