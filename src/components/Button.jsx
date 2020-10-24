import React from 'react';
import styles from './styles/buttonStyles.module.css'
import PropTypes from 'prop-types'

const Button =({onClick}) => {
return (
    <button className={styles.Button} onClick={onClick} >Load more</button>
)
}

export default  Button;

Button.propTypes = {
    onClick: PropTypes.func,
}