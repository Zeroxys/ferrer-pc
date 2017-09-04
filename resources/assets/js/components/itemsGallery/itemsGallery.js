import React from 'react'

import {Slide} from './arrows'

export class ItemsGallery extends React.Component {
  constructor () {
    super ()
  }

  render () {
    return (
      <div className = "galleryItems">
        <span className = "galleryTitle">
          <h3>PRODUCTOS RECOMENDADOS</h3>
        </span>
        <Slide/>
      </div>
    )
  }

}

