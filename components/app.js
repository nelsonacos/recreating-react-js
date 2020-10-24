import { Component } from '../lib/react.js'
import User from './user.js'
import Wrapper from './wrapper.js'

class App extends Component {
    render() {
        return `
            <div class="app">
                ${new Wrapper({
                    children:`
                    <h1>React.js</h1>
                    ${new User({
                        name: 'Nelson Acosta',
                        avatar: './images/nelson-acosta.jpg'
                    }).render()}
                    `
                }).render()}
            </div>
        `
    }
}

export default App
