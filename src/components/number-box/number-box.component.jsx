import { useState } from 'react';
import './number-box.styles.scss';

const NumberBox = ({ val }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleNumberBtn = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <button className={isClicked ? 'active' : 'btn-number'} onClick={handleNumberBtn}>
        {val}
      </button>
    </>
  );
};

export default NumberBox;
