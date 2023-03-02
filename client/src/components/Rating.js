import React from "react";
import "./rating.css";

export default function Rating(props) {
  const { selectedNumber, setSelectedNumber, setIsSubmitted } = props;

  return (
    <div className='rating-component'>
      <div className='rating-number'>
        <img src='images/icon-star.svg' alt='icon-star' />
      </div>
      <h3>How did we do?</h3>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering
      </p>
      <div className='rating-number-container'>
        {[1, 2, 3, 4, 5].map((number) => (
          <div
            className={
              number === selectedNumber
                ? "rating-number-active"
                : "rating-number"
            }
            onClick={() => setSelectedNumber(number)}
          >
            {number}
          </div>
        ))}
      </div>
      <button className='btn-primary' onClick={() => setIsSubmitted(true)}>
        Submit
      </button>
    </div>
  );
}
