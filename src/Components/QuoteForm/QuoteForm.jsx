import React, { useState } from "react";
import "./QuoteForm.css";

const QuoteForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "ad25dc0b-3107-4e55-bed4-a0c8b3d2dc7d");

    // Ensure delivery to your Truehost inbox
    formData.append("to_email", "info@morisoninsurance.co.ke");
    formData.append("from_email", "no-reply@morisoninsurance.co.ke");
    formData.append("subject", "New Quote Request from Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Quote request sent successfully!");
        event.target.reset();
      } else {
        console.log("Web3Forms error:", data);
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network or server error:", error);
      setResult("Network error. Please check your connection.");
    }
  };

  return (
    <div className="quote-form">
      
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="John Doe" required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="john@example.com" required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="+254 700 000 000" required />
        </div>

        <div className="form-group">
          <label>Insurance Type</label>
          <select name="insurance_type" required>
            <option value="">Select Insurance Type</option>
            <option>Auto Insurance</option>
            <option>Home Insurance</option>
            <option>Business Insurance</option>
            <option>High-Value Insurance</option>
            <option>Recreation Insurance</option>
          </select>
        </div>

        <div className="form-group">
          <label>Additional Information</label>
          <textarea
            name="message"
            placeholder="Tell us more about your insurance needs..."
            rows="4"
          ></textarea>
        </div>

        {/* Hidden anti-spam */}
        <input type="checkbox" name="botcheck" style={{ display: "none" }} />

        <button type="submit" className="primary-btn">
          Submit Quote Request
        </button>

        {result && <p className="form-result">{result}</p>}
      </form>
    </div>
  );
};

export default QuoteForm;
