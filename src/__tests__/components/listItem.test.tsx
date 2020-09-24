/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ListItem from '../../components/ListItem';

describe('<ListItem />', () => {
  const data = {
    0: {
      id: '4de37406-3f6b-4766-a8ca-cce5e144204d',
      name: 'John Cowdery William',
      children: {},
      level: 1,
    },
  };
  const id = '1';

  it('should be in the document', () => {
    const { container } = render(<ListItem id={id} />);

    expect(container).toBeInTheDocument();
  });

  it('should render Accordion case has data', () => {
    const { getByTestId } = render(<ListItem data={data} id={id} />);

    expect(getByTestId(`listItem${id}`)).toBeTruthy();
    expect(getByTestId(`input${data[0].id}`)).toBeTruthy();
  });
});
