import axios from 'axios';
import {toastr} from '../helpers/script';
import {API_COMPANY_ENDPOINT} from 'react-native-dotenv';

const query = {
  search: '',
  page: 1,
  previousPage: 1,
  nextPage: 2,
  show: 10,
  sort: 'updated',
  more: false,
};

function getCompanies({page, search, show, sort}, callback) {
  axios
    .get(
      `${API_COMPANY_ENDPOINT}?name=${search}&location=${search}&page=${page}&show=${show}&sort=${sort}`,
    )
    .then(res => {
      const {values, page: currentPage, previousPage, nextPage} = res.data;
      callback(values, {currentPage, previousPage, nextPage});
    })
    // Kalo catch satu baris error
    .catch(err => toastr('Ops, network error'));
}

export {query, getCompanies};
