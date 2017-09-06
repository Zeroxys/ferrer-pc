import React from 'react'

import {Items} from './items'
import {utils} from '../../utils/utils'

export class Subcategories extends React.Component {
  constructor (props) {
    super()
    this.state = {
      showItems : false
    }
    this.data = props.data

    this.switchItems = this.switchItems.bind(this)
  }

  switchItems() {
    this.setState({
      showItems : !this.state.showItems
    })
    if(this.state.showItems) {
      return (<div>soy true xD</div>)
    }
  }

  render () {
    return (
      <li className="Categories-subcategories-item" onClick={this.switchItems}>
        <h1>Marca X</h1>
      </li>
    )
  }
}