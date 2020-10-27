import { Component, createElement } from '../lib/react/index.js'

class User extends Component {
  state = {
    age: this.props.age
  }
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
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