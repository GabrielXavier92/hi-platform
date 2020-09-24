import React from 'react';
import Accordion from '../Accordion';

import { IListItem, Item } from '../../interfaces/generic';

import './styles.scss';

const ListItem: React.FC<IListItem> = ({ data, id }) => (
  <div data-testid={`listItem${id}`} className="listItem__content">
    {data && Object.values(data!).map((item: Item) => (
      <Accordion key={item.id} id={item.id} name={item.name} level={item.level} checked={item.checked} data={item.children} />
    ))}
  </div>
);

export default ListItem;
