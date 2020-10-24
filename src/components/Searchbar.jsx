import React, {Component} from 'react';
import styles from './styles/searchbarStyles.module.css'

export default class Searchbar extends Component {
    state = {
        searchValue:''
    }


inputValueHolder = (event) => {
  this.setState({searchValue:event.target.value} )
}

handleSubmit = event => {
  event.preventDefault();
  this.props.onSubmit(this.state.searchValue);
 this.setState({searchValue:''})
}

    render(){
    return (
      <>
      <header className={styles.Searchbar}>
      <form className={styles.Searchbar} onSubmit ={this.handleSubmit}>
      <input    className={styles.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
       value={this.state.searchValue}
        onChange={this.inputValueHolder}/>
      <button type="submit" className={styles.SearchFormButton}>
      <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>
      </form>  
      </header> 
      </>
    )
    }
}


