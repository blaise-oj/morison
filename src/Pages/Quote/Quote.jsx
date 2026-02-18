import React from "react";
import QuoteForm from "../../Components/QuoteForm/QuoteForm";
import "./Quote.css";

const Quote = () => {
  return (
    <div className="quote-page">
      <div className="quote-container">
        <h1>Get a Free Insurance Quote</h1>
        <p>Fill in the form below and we will contact you shortly.</p>

        <QuoteForm />
      </div>
    </div>
  );
};

export default Quote;
