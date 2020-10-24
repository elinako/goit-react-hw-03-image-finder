import React, {Component} from 'react';
import Modal from './Modal'
import styles from './styles/galleryItemStyles.module.css'
import PropTypes from 'prop-types'



class ImageGalleryItem extends Component {
state={
    showModal: false,
}

toggleModal =() =>{
    this.setState(state=>({showModal:!state.showModal}));
}

render () {
const imageFromGallery = this.props.image;
const {showModal} = this.state;


    return (
        <>
        <li className={styles.ImageGalleryItem} onClick={this.toggleModal}>
        <img src={imageFromGallery.webformatURL} alt={imageFromGallery.tags} id={imageFromGallery.id} className={styles.ImageGalleryItemImage}/>
        </li>
        { showModal && <Modal image={imageFromGallery} onClose={this.toggleModal} />}
        </>
    )
}

}



export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    imageFromGallery: PropTypes.object,
}