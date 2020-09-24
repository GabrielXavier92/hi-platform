import { createContext } from 'react';
import { Data } from '../../interfaces/generic';

interface IAccordionContext {
  getData: () => void;
  setCheck: (id: string) => void;
  data?: Data;
}

export default createContext<IAccordionContext>({} as IAccordionContext);
