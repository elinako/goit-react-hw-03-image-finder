import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './styles/immageGalleryStyles.module.css'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const ImageGallery = ({arrayOfImages}) => {

    return(
        <ul className={styles.ImageGallery}>
            {arrayOfImages.map(imageItem=>(<ImageGalleryItem  image={imageItem} key={uuidv4()} />))}
        </ul>

    )
}

export default ImageGallery;

ImageGallery.propTypes = {
    arrayOfImages: PropTypes.array
}