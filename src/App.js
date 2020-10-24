import React, {Component} from 'react';

import Searchbar from './components/Searchbar'
import ImagesAPI from './components/ImagesAPI'
import ImageGallery from './components/ImageGellery'
import Button from './components/Button'

import Loader from "react-loader-spinner";
import styles from './stylesApp.module.css'




class App extends Component {
state = {
  images:[],
  searchQuery: '',
  page: 1,
  loading: false,
  error:null
}


componentDidUpdate(prevProps, prevState){
  const prevSearchQuery = prevState.searchQuery;
  const nextSearchQuery = this.state.searchQuery;
  if(prevSearchQuery !==nextSearchQuery) {
    this.searchImages();
  }

  if(prevState.images !== this.state.images){
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
}

handleSearchValue = (query) => {
  this.setState({searchQuery:query,images:[],page:1});
}

searchImages = () => {
  this.setState({loading:true});
  const {searchQuery,page} = this.state
  ImagesAPI.axiosArticles(searchQuery,page).then (newImages => {
    this.setState((prevState => ({images:[...prevState.images,...newImages], page:prevState.page+1, loading: false})))})
    .catch(error => this.setState({error}))
   

} 

  render () {
    const {images, loading,error} = this.state;
    return (
      <>
      <Searchbar onSubmit={this.handleSearchValue}/>
      {loading ? <Loader
      className={styles.Loader}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      :(<ImageGallery arrayOfImages={images}/> )}
      {images.length > 0 && <Button onClick={this.searchImages} />}
      {error !== null && <p>Something went wrong...</p>}
      
      </>
    )
  }

}

export default App;

