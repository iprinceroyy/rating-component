import IllustrationThankYou from '../../assets/images/illustration-thank-you.svg';

import './greeting.styles.scss';

const Greeting = () => {
  return (
    <div className='greeting-container'>
      <div className='illustration-container'>
        <img src={IllustrationThankYou} alt='' />
      </div>
      <p>You selected 4 out of 5.</p>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support, don't
        hesitate to get in touch!
      </p>
    </div>
  );
};

export default Greeting;
