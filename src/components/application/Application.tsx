import { useState } from "react";

export const Application = () => {
  const [input, setInput] = useState("Alvin");
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img src="www.facebook.com" alt="may image ba talaga?" />
      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <div>
          <input type="text" placeholder="blank input here" />
        </div>
        <button>Submit</button>
        <button>Back</button>
      </form>
    </>
  );
};
