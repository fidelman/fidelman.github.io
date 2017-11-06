import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Title from './Title';
import '../styles/Gallery.css';

const renderVideo = (item) => {
  return (
    <iframe className="video-item" title={item.title} src={item.embedUrl} frameBorder="0" allowFullScreen />
  );
};

const Gallery = (props) => {
  if (!props.content.length) return null;

  const items = props.content.reverse().map((item) => {
    return {
      ...item,
      renderItem: renderVideo,
    };
  });

  return (
    <div>
      <Title title={props.title} />
      <ImageGallery
        items={items}
        showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={2000}
      />
    </div>
  );
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    embedUrl: PropTypes.string.isRequired,
    renderItem: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default Gallery;
