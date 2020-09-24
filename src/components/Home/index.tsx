import React, { useEffect, useContext } from 'react';

import ListItem from '../ListItem';
import Header from '../Header';

import AccordionContext from '../../context/accordion/state';

import './styles.scss';

const Home: React.FC = () => {
  const { getData, data } = useContext(AccordionContext);

  useEffect(getData, []);

  return (
    <>
      <Header />
      <div className="home__content">
        <ListItem data={data} />
      </div>
    </>
  );
};

export default Home;
