import React from 'react'
import HDD from '../../../img/discoduro.png'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//component's
import {FancyBox} from '../fancybox/fancybox'

const styles = {
  border : 'blue',
  display: 'block'
}

export class Items extends React.Component{
  constructor (props) {
    super()

    this.state = {
      showFancy :  false
    }

    this.styles = {
      border: 'blue',
      display: 'block'
    }

    this.data = props.product
    this.getFancy = this.getFancy.bind(this)
    this.showFancy = this.showFancy.bind(this)
  }

  showFancy() {
    this.setState({
      showFancy : !this.state.showFancy
    })
  }

  getFancy() {
    if(this.state.showFancy) {
      return (
      <div style={{...styles}}>
        <FancyBox data = {this.data} css={this.styles}/>
      </div>)
    }
  }

  render () {
    return (
      <div className="itemBox" onClick={this.showFancy}>
        {this.state.showFancy ? this.getFancy() : null}
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
