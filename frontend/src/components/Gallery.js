import React from 'react'
import RespGallery from './RespGallery'
import SimpleReactLightbox from "simple-react-lightbox";


import g1 from '../assets/images/gallery/g1.jpg'
import tg1 from '../assets/images/gallery/thumb-g1-320-421.jpg'
import g2 from '../assets/images/gallery/g2.jpg'
import tg2 from '../assets/images/gallery/thumb-g2-320-196.jpg'
import g3 from '../assets/images/gallery/g3.jpg'
import tg3 from '../assets/images/gallery/thumb-g3-271-357.jpg'
import g4 from '../assets/images/gallery/g4.jpg'
import tg4 from '../assets/images/gallery/thumb-g4-320-196.jpg'
import g5 from '../assets/images/gallery/g5.jpg'
import tg5 from '../assets/images/gallery/thumb-g5-320-196.jpg'
import g6 from '../assets/images/gallery/g6.jpg'
import tg6 from '../assets/images/gallery/thumb-g6-271-357.jpg'
import g7 from '../assets/images/gallery/g7.jpg'
import tg7 from '../assets/images/gallery/thumb-g7-320-197.jpg'
import g8 from '../assets/images/gallery/g8.jpg'
import tg8 from '../assets/images/gallery/thumb-g8-320-196.jpg'
import g10 from '../assets/images/gallery/g10.jpg'
import tg10 from '../assets/images/gallery/thumb-g10-271-355.jpg'

const IMAGES =
  [
    {
      source: g1,
      thumbnail: tg1,
      caption: 'Lorem 1',
      thumbnailWidth: 320,
      thumbnailHeight: 421
    },
    {
      source: g2,
      thumbnail: tg2,
      caption: 'Lorem 1',
      thumbnailWidth: 320,
      thumbnailHeight: 196
    },
    {
      source: g3,
      thumbnail: tg3,
      caption: 'Lorem 1',
      thumbnailWidth: 271,
      thumbnailHeight: 357
    },
    {
      source: g4,
      thumbnail: tg4,
      caption: 'Lorem 1',
      thumbnailWidth: 320,
      thumbnailHeight: 196
    },
    {
      source: g5,
      thumbnail: tg5,
      caption: 'Lorem 1',
      thumbnailWidth: 320,
      thumbnailHeight: 196
    },
    {
      source: g6,
      thumbnail: tg6,
      caption: 'Lorem 1',
      thumbnailWidth: 271,
      thumbnailHeight: 357
    },
    {
      source: g7,
      thumbnail: tg7,
      caption: 'Lorem 1',
      thumbnailWidth: 320,
      thumbnailHeight: 197
    },
    {
      source: g10,
      thumbnail: tg10,
      caption: 'Lorem 1',
      thumbnailWidth: 271,
      thumbnailHeight: 355
    },
    {
      source: g8,
      thumbnail: tg8,
      caption: 'Lorem 1',
      thumbnailWidth: 320,
      thumbnailHeight: 196
    },
    {
      source: g2,
      thumbnail: tg2,
      caption: 'Lorem 1',
      thumbnailWidth: 320,
      thumbnailHeight: 196
    }
  ]


class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  mapImages() {
    let images = this.props.images.map( (obj) => {
      return (
        {
          id: obj.id,
          caption: obj.image.caption,
          large: obj.image.formats.large.url,
          thumbnail: obj.image.formats.medium.url
        }
      )
    })
    return images
  }

  render() {
    let images = this.mapImages()
    return (
      <div>
        <SimpleReactLightbox>
          <RespGallery images={images} />
        </SimpleReactLightbox>
      </div>
    )
  }

}

  export default Gallery
