import "./submitted.css";

export default function Submitted(props) {
  const { selectedNumber } = props;
  return (
    <div className='rating-component align-center'>
      <img src='images/illustration-thank-you.svg' alt='illustration logo' />
      <div className='rating-selected'>
        You selected {selectedNumber} out of 5
      </div>
      <h3>Thank you!</h3>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch
      </p>
    </div>
  );
}
