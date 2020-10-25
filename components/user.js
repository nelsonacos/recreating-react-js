import { Component, createElement } from '../lib/react/index.js'

class User extends Component {
  render() {
    const { avatar, name } = this.props
    return createElement('div', {
      class: 'user',
      children: [
        createElement('div', {
          class: 'avatar'
        }),
        createElement('h2', null, name)
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