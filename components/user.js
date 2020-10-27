import { Component, createElement } from '../lib/react/index.js'

class User extends Component {
  displayName = 'User'
  state = {
    age: this.props.age
  }
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount(){
    console.log('el componente se va a renderizar')
  }

  componentDidMount(){
    console.log(`el componente ${this.displayName} se renderizo`)
  }

  componentDidUpdate(){
    console.log('el componente se actualizo')
  }

  handleClick(event) {
    this.setState({
      age: this.state.age + 1
    })
  }
  render() {
    const { avatar, name } = this.props
    const { age } = this.state
    return createElement('div', {
      class: 'user',
      onClick: this.handleClick,
      children: [
        createElement('div', {
          class: 'avatar'
        }),
        createElement('h2', null, `${name} ${age}`)
      ]
    }) 
  }
}

/* `
      <div class="user">
        <div class="avatar" style="background-image: url(${avatar})">     
        </div>
        <h2>${name}</h2>
      </div>
    ` */
export default User