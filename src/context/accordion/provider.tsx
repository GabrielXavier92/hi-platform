import React, { useState, useCallback } from 'react';
import { Data, Item } from '../../interfaces/generic';

import AccordionContext from './state';

const AccordionProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Data>({} as Data);

  const getData = useCallback(
    () => {
      fetch(process.env.REACT_APP_API as string)
        .then((res) => res.json())
        .then((result: Data) => {
          setData(result);
        });
    },
    [],
  );

  const checkAll = (checked: boolean, itens: Data): Data => Object.values(itens).map((item: Item) => {
    const newItem = item;
    newItem.children = checkAll(checked, item.children!);
    return { ...newItem, checked };
  });

  const findItemAndCheck = (id: string, itens: Data): Data => {
    const elIndex = Object.values(itens).findIndex((item: Item) => item.id === id);
    if (elIndex !== -1) {
      const newItens = { ...itens };
      newItens[elIndex] = { ...itens[elIndex], checked: !itens[elIndex].checked };
      newItens[elIndex].children = checkAll(!itens[elIndex].checked, newItens[elIndex].children!);
      return newItens;
    }
    return Object.values(itens).map((item: Item) => {
      const newItem = { ...item };
      newItem.children = findItemAndCheck(id, item.children!);
      const hasChecked = Object.values(newItem.children!).find((childrenItem: any) => childrenItem.checked);
      if (hasChecked) {
        newItem.checked = true;
      }
      return newItem;
    });
  };

  const setCheck = (id: string) => {
    const newData = findItemAndCheck(id, data);
    setData(newData);
  };

  const value = {
    getData,
    setCheck,
    data,
  };
  return <AccordionContext.Provider value={value}>{children}</AccordionContext.Provider>;
};

export default AccordionProvider;
