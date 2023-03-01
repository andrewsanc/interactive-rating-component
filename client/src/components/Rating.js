export default function Rating() {
  return (
    <div>
      <div>
        <img src='images/icon-star.svg' alt='icon-star' />
      </div>
      <h3>How did we do?</h3>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering
      </p>
      <div style={{ display: "flex" }}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
      <button style={{ backgroundColor: "orange" }}>Submit</button>
    </div>
  );
}
