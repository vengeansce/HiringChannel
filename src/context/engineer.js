import axios from 'axios';
import {API_ENGINEER_ENDPOINT} from 'react-native-dotenv';

const query = {
  search: '',
  page: 1,
  previousPage: 1,
  nextPage: 2,
  show: 10,
  sort: 'updated',
};

function getEngineers({search, show, sort}, callback) {
  axios
    .get(
      `${API_ENGINEER_ENDPOINT}?name=${search}&skills=${search}&salary=${search}&show=${show}&sort=${sort}`,
    )
    .then(res => callback(res.data.values.result))
    .catch(err => console.warn(err));
}

export {query, getEngineers};
