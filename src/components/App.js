import { Menu, NewColor, Charts, Colors } from './containers'
import '../../stylesheets/APP.scss'

const App = () =>
    <div className="app">
        <Menu />
        <NewColor />
        <div className="dash">
          <Colors />
          <div className="chart-container">
             <h2>Data Leash</h2>
             <Charts />
          </div>
        </div>
    </div>

export default App
