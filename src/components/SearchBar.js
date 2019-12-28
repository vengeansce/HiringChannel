import React from 'react';
import {Header, Item, Input, Icon} from 'native-base';

export default function SearchBar() {
  return (
    <Header searchBar rounded>
      <Item>
        <Icon name="search" />
        <Input placeholder="Search by name, skills, or salary" />
      </Item>
    </Header>
  );
}
