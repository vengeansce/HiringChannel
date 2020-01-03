import React, {useState, useEffect} from 'react';

import EmployeeAccount from '../components/employee/Profile';
import EngineerAccount from '../components/engineer/Profile';
import {getDataStorage} from '../helpers/script';

const Account = props => {
  let [role, setRole] = useState('');
  useEffect(() => {
    getDataStorage('role', value => setRole(value));
  });
  return (
    <>
      {role === 'company' && <EmployeeAccount {...props} />}
      {role === 'engineer' && <EngineerAccount {...props} />}
    </>
  );
};

Account.navigationOptions = {
  header: null,
};

export default Account;
