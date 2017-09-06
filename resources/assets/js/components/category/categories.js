import React from 'react'

import {Subcategories} from './subcategories'

export class Categories extends React.Component {
  constructor (props) {
    super ()
    this.data = props.data
    this.state = {
      addClass : true
    }

    this.showSubcategories = this.showSubcategories.bind(this)
  }

  showSubcategories() {
    this.setState({
      addClass : !this.state.addClass
    })
  }

  render () {
    return (
      <div>
        <h1 onClick={this.showSubcategories} className="Categories">{this.data.name}</h1>
        <ul className = {this.state.addClass ? 'test' : ''}>
          {this.data.subcategories.map( (el,i) => {
            return (
              <Subcategories data={el} key={i}/>
            )
          })}
        </ul>
      </div>
    )
  }
}

