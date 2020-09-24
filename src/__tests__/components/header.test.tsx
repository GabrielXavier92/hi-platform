/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../../components/Header';

describe('<Header />', () => {
  it('should be in the document', () => {
    const { container } = render(<Header />);

    expect(container).toBeInTheDocument();
  });
});
