import React from "react";

export const Input = (props) => {
  return (
    <>
      <p className="title-for-input-atha">{props.title}</p>
      <input
        className="Input-for-contact-andother-compo"
        type="text"
        placeholder={props.placeholder}
        value={props.message}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </>
  );
};
