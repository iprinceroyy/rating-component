import { useContext, useState } from 'react';
import './number-box.styles.scss';
import { RatingContext } from '../../contexts/rating.context';

const NumberBox = ({ val }) => {
  const [isClicked, setIsClicked] = useState(false);

  const { setRatingCount } = useContext(RatingContext);

  const handleNumberBtn = () => {
    setIsClicked(!isClicked);
    setRatingCount(ratingCount => ratingCount + 1);
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
