/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import AccordionContext from '../../context/accordion/state';
import Accordion from '../../components/Accordion';

describe('<Accordion />', () => {
  const setCheck = jest.fn();
  const getData = jest.fn();
  const data = {};
  const value = {
    setCheck,
    getData,
    data,
  };

  const customRender = (ui: any) => render(
    <AccordionContext.Provider value={value}>{ui}</AccordionContext.Provider>,
  );

  const item = {
    id: '1',
    name: 'test',
    level: 1,
    checked: false,
    data: {},
  };

  it('should be in the document', () => {
    const { container } = render(<Accordion {...item} />);

    expect(container).toBeInTheDocument();
  });

  it('should called setCheck and check if click', () => {
    const { rerender, getByTestId } = customRender(<Accordion {...item} />);

    userEvent.click(getByTestId(`input${item.id}`));

    const newItem = { ...item, checked: true };

    rerender(<Accordion {...newItem} />);
    expect(getByTestId(`input${item.id}`)).toBeChecked();
    expect(setCheck).toBeCalled();
  });

  it('should uncheck if click', () => {
    const newItem = { ...item, checked: true };
    const { rerender, getByTestId } = customRender(<Accordion {...newItem} />);

    userEvent.click(getByTestId(`input${item.id}`));

    rerender(<Accordion {...item} />);

    expect(setCheck).toBeCalled();
  });

  it('should render ArrowDown case has data and open is false', () => {
    const newItem = {
      ...item,
      data: {
        0: {
          id: '4de37406-3f6b-4766-a8ca-cce5e144204d',
          name: 'John Cowdery William',
          children: {},
          level: 1,
        },
      },
    };
    const { getByTestId } = render(<Accordion {...newItem} />);

    expect(getByTestId(`arrowDown${newItem.id}`)).toBeTruthy();
  });

  it('should render ArrowUp case has data and open is true', () => {
    const newItem = {
      ...item,
      data: {
        0: {
          id: '4de37406-3f6b-4766-a8ca-cce5e144204d',
          name: 'John Cowdery William',
          children: {},
          level: 1,
        },
      },
    };
    const { getByTestId } = render(<Accordion {...newItem} />);

    userEvent.click(getByTestId(`arrowDown${newItem.id}`));

    expect(getByTestId(`arrowUp${newItem.id}`)).toBeTruthy();
    expect(getByTestId(`listItem${newItem.id}`)).toBeTruthy();
  });
});
