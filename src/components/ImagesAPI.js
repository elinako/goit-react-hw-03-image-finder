import axios from 'axios';
import PropTypes from 'prop-types';

const axiosArticles = (query, page=1) => {
    return axios
    .get(`https://pixabay.com/api/?q=${query}&page=${page}&key=18754352-1a008cfcfe771c0acf1dc35e2&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response=> response.data.hits)
}

export default {axiosArticles};

axiosArticles.propTypes = {
    query: PropTypes.string,
}