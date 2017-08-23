import React from 'react'

// util's
import {utils} from '../../utils/utils'

export class FancyBox extends React.Component {
  constructor(props) {
    super()
    this.state = {
      showCss : props.showCss,
      close : false
    }

    this.data = props.data || utils.items()

    this.close = this.close.bind(this)
  }

  close() {
    this.setState ({
      close : !this.state.close
    })
  }

  render () { 
    return (
      <div id="fancybox" className={"fadeIn animated  " + (this.state.showCss)}>
        <div className="fancybox-wrap">
          <a href="#" className="fancybox-close" onClick={this.close}></a>
          <div className="form-box">
  
            <div className="form-image">
              <img src={this.data.img}/>
            </div>
  
            <div className="form-group">
              <h3 className="form-group--title">{this.data.name}</h3>
              <h4 className="form-group--price">$ {this.data.price}</h4>
              <ul>
                {this.data.skills.map( (el, i) => {
                  return <li className="form-group--list" key={i}>{el}</li>
                })}
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}
