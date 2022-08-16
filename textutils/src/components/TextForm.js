import React from "react";

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="6"
        ></textarea>
      </div>
      <button className="btn btn-primary">Covert to UpperCase</button>
    </div>
  );
}
