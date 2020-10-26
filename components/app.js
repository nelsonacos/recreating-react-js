import { Component, createElement } from '../lib/react/index.js'
import User from './user.js'
import Wrapper from './wrapper.js'
// import UserStyled from './user-styled.js'

class App extends Component {
    render() {
        return createElement('div', {
                class: 'app',
                children: new Wrapper({
                    children: [
                        new User({
                            name: 'Nelson Acosta',
                        })
                    ]
                })
            })
    }
}

export default App
