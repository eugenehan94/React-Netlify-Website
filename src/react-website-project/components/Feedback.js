import React from "react";

function Feedback({ show, closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal-close-btn">
          <span onClick={closeModal}>x</span>
        </div>
        <div className="modal-header">
          <h1>We'd love to hear your feedback</h1>
        </div>
        <div className="modal-text">
          <p>
            Find everything you need? Tell us about your experience with our
            website.
          </p>
        </div>
        <div className="modal-textarea">
          <textarea></textarea>
          <p>
            By providing a response to the survey, you consent to the
            collection, use and sharing of your personal information as provided
            in the privacy policy.
          </p>
        </div>
        <div>
          <p style={{ backgroundColor: "white" }}>
            Need our help right away? Contact us.
          </p>
        </div>
        <div className="modal-buttons">
          <button onClick={closeModal} className="modal-buttons-cancel">
            Cancel
          </button>
          <button className="modal-buttons-submit">Submit</button>
        </div>
        <div className="modal-footer">
          <p style={{ backgroundColor: "white" }}>Powered by Medallia</p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
