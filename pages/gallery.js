import React from 'react';

import Layout from '../components/layout';

import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css'; // This only needs to be imported once in your app

/*
const images = [
  {src: '/static/gallary/bridge.jpg'},
  {src: '/static/gallary/bridge_closeup.jpg'},
];
*/

const images = [
  '/static/images/gallary/bridge.jpg',
  '/static/images/gallary/bridge_closeup.jpg',
  '/static/images/gallary/IMG_9591.jpg',
  '/static/images/gallary/IMG_9598.jpg',
  '/static/images/gallary/IMG_9602.jpg',
  '/static/images/gallary/IMG_9632.jpg',
  '/static/images/gallary/IMG_9634.jpg',
  '/static/images/gallary/IMG_9643.jpg',
  '/static/images/gallary/IMG_9656.jpg',
  '/static/images/gallary/IMG_9674.jpg',
  '/static/images/gallary/IMG_9677.jpg',
  '/static/images/gallary/IMG_9687.jpg',
];

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const {photoIndex, isOpen} = this.state;

    return (
      <Layout container="true" title="Gallery" dark>
        <div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({isOpen: false})}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {images.map((x, i) => (
            <div style={{width: '300px'}} key={i}>
              <img
                src={x}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '3px',
                  margin: '4px 0px',
                }}
                onClick={() => this.setState({isOpen: true, photoIndex: i})}
              />
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default Gallery;
