import React from 'react'
import HDD from '../../../img/discoduro.png'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//component's
import {FancyBox} from '../fancybox/fancybox'

const styles = {
  border : 'blue'
}

export class Items extends React.Component{
  constructor (props) {
    super()

    this.data = props.product
    this.showFancy = this.showFancy.bind(this)
    this.hideFancy = this.hideFancy.bind(this)
  }

  hideFancy() {
    console.log('hola')
  }

  showFancy() {
    if(this.state.showFancy) {
      return (
      <div onClick={this.hideFancy} style={{...styles}}>
        <FancyBox data = {this.data}/>
      </div>)
    }
  }

  render () {
    return (
      <div className="itemBox">
        {this.showFancy()}
        <span className="itemBox-discount">
          <div className="itemBox-discount-contentDiscount">
            <p className="itemBox-discount-contentDiscount-percent">{this.data.discount}</p>
            <p className="itemBox-discount-contentDiscount-discountText">{this.data.desc}</p>
          </div>
        </span>
        <img src={this.data.img} alt={this.data.alt} className="itemBox-img"/>
        <section className="itemBox-productDescription">
          <h3 className="itemBox-productDescription-name">{this.data.name}</h3>
          <span className="itemBox-productDescription-priceDesc">$ {this.data.priceDesc}</span>
          <span className="itemBox-productDescription-price">$ {this.data.price}</span>
        </section>
      </div>
    )
  }
}
