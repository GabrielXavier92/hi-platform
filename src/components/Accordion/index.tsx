import React, {
  useState, useContext,
} from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import ListItem from '../ListItem';

import AccordionContext from '../../context/accordion/state';

import { Item } from '../../interfaces/generic';

import './styles.scss';

const Accordion: React.FC<Item> = ({
  id, name, data, level, checked,
}) => {
  const { setCheck } = useContext(AccordionContext);

  const [open, setOpen] = useState(false);

  const handleCheck = () => {
    setCheck(id);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const accordionMarginLeft = () => {
    const margin = 15 * level;
    return `${margin}px`;
  };

  const hasData = () => !!Object.keys(data!).length;

  return (
    <>
      <div className="accordion__content">
        <div style={{ marginLeft: accordionMarginLeft() }}>
          <input data-testid={`input${id}`} type="checkbox" checked={checked} onChange={handleCheck} />
          <span>
            {name}
          </span>
        </div>
        <div>
          {hasData() && (open ? <MdKeyboardArrowUp data-testid={`arrowUp${id}`} size={30} color="blue" onClick={handleOpen} /> : <MdKeyboardArrowDown data-testid={`arrowDown${id}`} size={30} onClick={handleOpen} />)}
        </div>
      </div>
      {hasData() && open && (
      <ListItem id={id} data={data!} />
      )}
    </>
  );
};

export default Accordion;
