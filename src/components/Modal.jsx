import React, {Component} from 'react';
import styles from './styles/modalStyles.module.css'


class Modal extends Component  {

componentDidMount=()=>{
  window.addEventListener('keydown', this.handleEscapeModal)
}

componentWillUnmount=()=>{
  window.removeEventListener('keydown',this.handleEscapeModal)
}

handleEscapeModal =(e)=>{
  if(e.code === 'Escape'){
    this.props.onClose();
}}


closeModal = ()=>{
  this.props.onClose();
}

  render () {
const imageModal=this.props.image;
    return (
      <div className={styles.Overlay} onClick={this.closeModal}>
<div className={styles.Modal}>
  <img src={imageModal.largeImageURL} alt={imageModal.tags} />
</div>
</div>
  )
  }
    
}

export default Modal;