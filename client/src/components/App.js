import React, { useState } from "react";
import Rating from "./Rating";
import "./app.css";
import Submitted from "./Submitted";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      {isSubmitted ? (
        <Submitted selectedNumber={selectedNumber} />
      ) : (
        <Rating
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </>
  );
}
