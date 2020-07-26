import { Charts, NewScenario, Scenarios } from './containers-v2'

import '../../stylesheets/APP.scss'

const App = () =>
    <div className="app">
        <NewScenario />
        <div className="dash">
          <Scenarios />
          <div className="chart-container">
             <Charts />
          </div>
        </div>
    </div>

export default App
