import React from 'react'
import Slider from 'react-slick'
import {Items} from '../category/items'
import {utils} from '../../utils/utils'

export class Slide extends React.Component {
  constructor () {
    super()
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true
    }

    console.log(utils.items(2))

    return (
      <Slider {...settings}>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
        <div>
          <Items product={utils.items()}/>
        </div>
      </Slider>
    )
  }
}
