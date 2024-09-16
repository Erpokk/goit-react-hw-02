import Buttons from "../Buttons/Buttons";
import css from './Options.module.css'

const Options = ({ options, onClick, total, clear }) => (
  <div className={css.wrapper}>
    {options.map(option => (
      <Buttons key={option} onClick={() => onClick(option)}>
        {option}
      </Buttons>
    ))}
    { total() > 0 ? (<Buttons onClick={clear} >Reset</Buttons>) : null}
  </div>    
);

export default Options;