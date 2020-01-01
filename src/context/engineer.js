import axios from 'axios';
import {API_ENGINEER_ENDPOINT} from 'react-native-dotenv';

const query = {
  search: '',
  page: 1,
  previousPage: 1,
  nextPage: 2,
  show: 10,
  sort: 'updated',
  more: false,
};

function getEngineers({page, search, show, sort}, callback) {
  axios
    .get(
      `${API_ENGINEER_ENDPOINT}?page=${page}&name=${search}&skills=${search}&salary=${search}&show=${show}&sort=${sort}`,
    )
    .then(res => {
      const {
        result,
        page: currentPage,
        previousPage,
        nextPage,
      } = res.data.values;
      callback(result, {currentPage, previousPage, nextPage});
    })
    .catch(err => console.warn(err));
}

export {query, getEngineers};
