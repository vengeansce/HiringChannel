import React, {useState, useEffect} from 'react';

import CompanyAccount from '../components/company/Profile';
import EngineerAccount from '../components/engineer/Profile';
import {getDataStorage} from '../helpers/script';

const Account = props => {
  let [role, setRole] = useState('');
  useEffect(() => {
    getDataStorage('role', value => setRole(value));
  });
  return (
    <>
      {role === 'company' && <CompanyAccount {...props} />}
      {role === 'engineer' && <EngineerAccount {...props} />}
    </>
  );
};

Account.navigationOptions = {
  header: null,
};

export default Account;
