import React from 'react'
import {render} from 'react-dom'

import {utils} from '../../utils/utils'

//Component's
import {Categories} from './categories'
import {Spinner} from '../spinner/spinner'
import {Items} from './items'
import {FancyBox} from '../fancybox/fancybox'

export class Category extends React.Component {
  constructor () {
    super ()
    this.state = {
      categorias : null,
      items : null
    }

    this.showCategories = this.showCategories.bind(this)
  }

  componentDidMount(){
    setTimeout( () => {
      this.setState({
        categorias : utils.fillCategories(7),
        items : utils.getItems(7)
      })
    },2000)
  }

  showCategories () {
    if(this.state.categorias === null) {
      return (<div><Spinner/></div>)
    }

    return (<div>
        {this.state.categorias.map( (el, i) => {
          return (<Categories data={el} key={i}/>)
        })}
    </div>)
  }

  render () {
    return (
      <section className="MainContent-category">
        
        <div className="MainContent-category-categoryMenu">
          <div className="MainContent-category-categoryMenu">
            <h2 className="MainContent-category-categoryTitle">CATEGORIAS</h2>
            {this.showCategories()}
          </div>
          <div className="minigallery"></div>
        </div>

        <div className="MainContent-category-resultContent">
          
          <div>
            <h3 className = "MainContent-category-resultTitle">Ofertas</h3>
          </div>

          <div className="MainContent-category-resultBox">
            {utils.getItems(7).map( (el, i) => {
              return (<Items product={el} key={i}/>)
            })}
          </div>

        </div>

      </section>
    )
  }

}
