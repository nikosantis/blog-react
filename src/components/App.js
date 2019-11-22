import React from 'react'
import axios from 'axios'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      usuarios: []
    }
  }
  async componentDidMount() {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users')

    this.setState({
      usuarios: respuesta.data
    })
  }
  ponerTexto = () =>  (
    this.state.usuarios.map((usuario) => (
      <div key={usuario.id}>
        <p>Nombre: {usuario.name}</p>
        <p>Email: {usuario.email}</p>
        <p>Website: {usuario.website}</p>
        <hr/>
      </div>
    ))
  )

  render () {
    return (
      <div className='test'>
        <h1>Nikolas Santis</h1>
        <h2>Jugando con React</h2>
        <h3>Para crear un blog</h3>
        { this.ponerTexto() }
      </div>
    )
  }
}
