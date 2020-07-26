import { Component } from 'react'
import PropTypes from 'prop-types'
import '../../../stylesheets/AddScenarioForm.scss'

const AddScenarioForm = ({onNewScenario=f=>f}) => {

    let _title, _color, _numRooms, _initialAvail, _avgLos

    const submit = e => {
        e.preventDefault()

        onNewScenario(_title.value,
          _color.value,
          _numRooms.value,
          _initialAvail.value,
          _avgLos.value)

        _title.value = ''
        _color.value = '#000000'
        _numRooms.value = 0
        _initialAvail.value = 0
        _avgLos.value = 1
        _title.focus()
    }

    return (
        <form className="add-scenario" onSubmit={submit}>
            <input ref={input => _title = input}
                   type="text"
                   placeholder="scenario title..." required/>
            <input ref={input => _numRooms = input}
                   type="number"
                   placeholder="number rooms..." required/>
            <input ref={input => _initialAvail = input}
                   type="number"
                   placeholder="initial availability..." required/>
            <input ref={input => _avgLos = input}
                   type="number"
                   placeholder="average Length of Stay..." required/>
            <input ref={input => _color = input}
                   type="color" required/>
            <button>ADD</button>
        </form>
    )

}

AddScenarioForm.propTypes = {
    onNewScenario: PropTypes.func
}

export default AddScenarioForm
