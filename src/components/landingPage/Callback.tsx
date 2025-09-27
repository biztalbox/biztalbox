import React from "react";

const Callback = () => {
  return (
    <form>
      <input
        type="tel"
        className="form-control mb-20"
        id="phone"
        style={{
          backgroundColor: "transparent",
          borderColor: "black",
          color: "black",
          fontSize: "20px",
          borderRadius: "40px",
        }}
        minLength={7}
        maxLength={15}
        placeholder="Enter Phone No."
      />
      <button type="submit" className="tp-btn-white background-black">
        Submit
      </button>
    </form>
  );
};

export default Callback;
