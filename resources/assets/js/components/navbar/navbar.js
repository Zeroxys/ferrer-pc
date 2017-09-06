import React from 'react'
import ferrerLogo from '../../../img/ferrer.png'

export class Navbar extends React.Component {
  constructor (props) {
    super()
    this.datos = ["Nuestras Instalaciones", "Ordenes de Servicio", "Facturas", "Contacto"]
  }

  render () {
    return (
      <nav className="navbar">
        <section className="navbar-content">

          <div className="navbar-content-title">
            <img src={ferrerLogo} alt="Ferrer PC" className="navbar-content-title-logo"/>
            <h1>Ferrer PC</h1>
          </div>

          <div className="navbar-content-navigation">
            <ul className="navbar-content-navigation-menu">
              {this.datos.map( (el,i) => <li key={i} className="navbar-content-navigation-menu-item"><a href="#">{el}</a></li> )}
            </ul>

            <form className="navbar-content-navigation-form">
              <input type="search" className="navbar-content-navigation-form-input" name="input-search" placeholder="Buscar"/>
              <i className="busqueda fa fa-search"></i>
            </form>
          </div>

        </section>
      </nav>
    )
  }
}
