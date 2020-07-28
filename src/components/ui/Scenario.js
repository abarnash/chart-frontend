import { Component } from 'react'
import PropTypes from 'prop-types'
import FaTrash from 'react-icons/lib/fa/trash-o'
import '../../../stylesheets/Scenario.scss'

class Scenario extends Component {

    render() {
        const { id, title, color, numRooms, initialAvail, avgLos, onRemove, onRun} = this.props
        return (
            <section className="scenario" style={this.style}>
                <h1 ref="title">{title}</h1>
                <button class="trash" onClick={()=>onRemove()}>
                    <FaTrash />
                </button>
                <div className="scenario"
                     style={{ backgroundScenario: color }}>
                </div>
                <ul>
                  <li>Rooms: {numRooms}</li>
                  <li>Initial Availability: {initialAvail}</li>
                  <li>Average LOS: {avgLos}</li>
                </ul>
                <button class="run" onClick={()=>onRun({numRooms,avgLos})}>
                    Run
                </button>
            </section>
        )
    }

}

Scenario.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    numRooms: PropTypes.number,
    initialAvail: PropTypes.number,
    avgLos: PropTypes.number,
    onRemove: PropTypes.func,
    onRun: PropTypes.func,
}

Scenario.defaultProps = {
    onRemove: f=>f,
    onRun: f=>f
}

export default Scenario
