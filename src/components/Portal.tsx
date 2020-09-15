import ReactDOM from 'react-dom';
import { ReactNode } from 'react';

type PortalProps = {
  children: ReactNode;
};

const Portal = ({ children }: PortalProps) => {
  const el = document.getElementById('modal');
  return ReactDOM.createPortal(children, el);
};

export default Portal;
