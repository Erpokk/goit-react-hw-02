import css from './Buttons.module.css'
import clsx from 'clsx'

const Buttons = ({ onClick, children }) => (
  <button className={clsx(css.btn, css[children])} onClick={onClick}>
    {children}
  </button>
);
export default Buttons;