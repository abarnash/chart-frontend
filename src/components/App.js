import { Menu, NewColor, Charts, Colors } from './containers'
import '../../stylesheets/APP.scss'

const App = () =>
    <div className="app">
        <Menu />
        <NewColor />
        <Colors />
        <Charts />
    </div>

export default App
