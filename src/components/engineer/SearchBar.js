import React from 'react';
import {Header, Item, Input, Icon} from 'native-base';

import RootContext from '../../context';
import {query} from '../../context/engineer';

export default function SearchBar() {
  const {dispatch, engineersQuery} = React.useContext(RootContext);
  return (
    <Header searchBar rounded>
      <Item>
        <Icon name="search" />
        <Input
          placeholder="Search by name, skills, or salary"
          value={engineersQuery.search}
          onChangeText={text =>
            dispatch.setEngineersQuery({...query, search: text})
          }
        />
      </Item>
    </Header>
  );
}
