import React from 'react';
import {Header, Item, Input, Icon} from 'native-base';

import RootContext from '../context';

export default function SearchBar() {
  const {dispatch} = React.useContext(RootContext);
  return (
    <Header searchBar rounded>
      <Item>
        <Icon name="search" />
        <Input
          placeholder="Search by name, skills, or salary"
          onChangeText={text => dispatch.setQueryParam({search: text})}
        />
      </Item>
    </Header>
  );
}
