import styled from '../lib/styled-components.js'
import { Component } from '../lib/react.js'


const UserStyled = styled.div`
  background-image: linear-gradient(to bottom, #f9f9f9 0%, #f9f9f9 130px,rgba(0,0,0,.15) 130px, rgba(0,0,0,.15) 131px, white 131px, white 100%);
  text-align: center;
  overflow: hidden;
  padding: 20px;
  font-family: system-ui;
  border-radius: .3rem;
  box-shadow: 0 0 1px rgba(0,0,0,.5);
  cursor: pointer;
  user-select: none;
`

const AvatarStyled = styled.div`
    height: 150px;
    width: 150px;
    border: 5px solid white;
    box-shadow: 0 0 2px black;
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 50%;
    background-size: cover;
    margin: 0 auto;
    background-image: url(./images/nelson-acosta.jpg);
`

class User extends Component {
    render() {
        const { name, avatar } = this.props
        return `
      ${UserStyled(`
            ${AvatarStyled(`
            `)}
            <h2>${name}</h2>
            `)}
        `
    }
}

export default User 